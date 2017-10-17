'use strict';

var isObject = require('lodash/isObject');
var assign = require('lodash/assign');
var isDate = require('lodash/isDate');
var Model = require('ampersand-model');
var State = require('ampersand-state');
var Collection = require('ampersand-collection');
var RESTCollection = require('ampersand-rest-collection');
var lodashMixin = require('ampersand-collection-lodash-mixin');

var api = require('../spire');
var Decimal = require('../types').Decimal;


var ajaxConfig = function() {
  return {
    headers: {
      'Authorization': api.authorization()
    }
  }
};


var stateTypesMixin = {
  dataTypes: {
    date: {
      set: function (newVal) {
        var newType;
        if (newVal == null) {
          newType = typeof null;
        } else if (!isDate(newVal)) {
          var err = null;
          var dateVal = new Date(newVal);
          if (isNaN(dateVal)) {
            // If the newVal cant be parsed, then try parseInt first
            dateVal = new Date(parseInt(newVal, 10));
            if (isNaN(dateVal)) err = true;
          }
          newVal = dateVal;
          newType = 'date';
          if (err) {
            newType = typeof newVal;
          }
        } else {
          newType = 'date';
          newVal = newVal;
        }

        return {
          val: newVal,
          type: newType
        };
      },
      get: function (val) {
        if (val == null) { return val; }
        return new Date(val);
      },
      'default': function () {
        return new Date();
      }
    },

    decimal: {
      set: function(val) {
        if(val === null || val === undefined)
          return { type: 'decimal', val: val };
        return { type: 'decimal', val: new Decimal(val) };
      },
      compare: function(curval, newval, attr) {
        if(curval === null || curval === undefined)
          return false;
        return curval.eq(newval);
      }
    }
  }
};


module.exports.State = State.extend(stateTypesMixin);
module.exports.Collection = Collection;



// Throw an error when a URL is needed, and none is supplied.
var urlError = function () {
    throw new Error('A "url" property or function must be specified');
};

// Wrap an optional error callback with a fallback error event.
var wrapError = function (model, options) {
    var error = options.error;
    options.error = function (resp) {
        if (error) error(model, resp, options);
        model.trigger('error', model, resp, options);
    };
};

module.exports.Model = Model.extend(lodashMixin, stateTypesMixin, {
  ajaxConfig: ajaxConfig,

  url: function() {
    return [api.url, this.endpoint, this.getId()].join('/');
  },

  destroy: function (options) {
    options = options ? clone(options) : {};
    var model = this;
    var success = options.success;

    var destroy = function () {
      model.trigger('destroy', model, model.collection, options);
    };

    options.success = function (resp) {
      if (options.wait || model.isNew()) destroy();
      // XXX: Clear ID on successful delete
      model.id = undefined;
      if (success) success(model, resp, options);
      if (!model.isNew()) model.trigger('sync', model, resp, options);
    };

    if (this.isNew()) {
      options.success();
      return false;
    }
    wrapError(this, options);

    var sync = this.sync('delete', this, options);
    options.xhr = sync;
    if (!options.wait) destroy();
    return sync;
  },

  save: function(key, val, options) {
    var attrs, method;

    // Handle both `"key", value` and `{key: value}` -style arguments.
    if (key == null || typeof key === 'object') {
      attrs = key;
      options = val;
    } else {
      (attrs = {})[key] = val;
    }

    options = assign({validate: true}, options);

    // If we're not waiting and attributes exist, save acts as
    // `set(attr).save(null, opts)` with validation. Otherwise, check if
    // the model will be valid when the attributes, if any, are set.
    if (attrs && !options.wait) {
      if (!this.set(attrs, options)) return false;
    } else {
      if (!this._validate(attrs, options)) return false;
    }

    // After a successful server-side save, the client is (optionally)
    // updated with the server-side state.
    if (options.parse === void 0) options.parse = true;
    var model = this;
    var success = options.success;

    // XXX: Overload default success handler to accept all parameters passed by
    // ampersand-sync and populate model from 201 Created response (follows
    // Location header)
    options.success = function (body, r, resp) {
      if(resp.statusCode == 201) {
        var id = parseInt(resp.headers['location'].split('/').pop(), 10);
        model.set({'id': id});
        var opts = options;
        opts.success = success;
        model.fetch(opts);
        return;
      }

      var serverAttrs = model.parse(resp, options);
      if (options.wait) serverAttrs = assign(attrs || {}, serverAttrs);
      if (isObject(serverAttrs) && !model.set(serverAttrs, options)) {
        return false;
      }
      if (success) success(model, resp, options);
      model.trigger('sync', model, resp, options);
    };
    wrapError(this, options);

    method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
    if (method === 'patch') options.attrs = attrs;
    // if we're waiting we haven't actually set our attributes yet so
    // we need to do make sure we send right data
    if (options.wait && method !== 'patch') options.attrs = assign(model.serialize(), attrs);
    var sync = this.sync(method, this, options);

    // Make the request available on the options object so it can be accessed
    // further down the line by `parse`, attached listeners, etc
    // Same thing is done below for fetch and destroy
    // https://github.com/AmpersandJS/ampersand-collection-rest-mixin/commit/d32d788aaff912387eb1106f2d7ad183ec39e11a#diff-84c84703169bf5017b1bc323653acaa3R32
    options.xhr = sync;
    return sync;
  }
});

module.exports.RESTCollection = RESTCollection.extend({
  url: function() {
    return api.url + '/' + this.endpoint;
  },

  ajaxConfig: ajaxConfig,

  parse: function(response, options) {
    return response.records;
  }
});
