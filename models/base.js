'use strict';

var Decimal = require('big.js');
var Model = require('ampersand-model');
var State = require('ampersand-state');
var Collection = require('ampersand-collection');
var RESTCollection = require('ampersand-rest-collection');
var lodashMixin = require('ampersand-collection-lodash-mixin');

var api = require('../spireapi');


var ajaxConfig = function() {
  return {
    headers: {
      'Authorization': api.authorization()
    }
  }
};

var stateTypesMixin = {
  dataTypes: {
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


module.exports.Model = Model.extend(lodashMixin, stateTypesMixin, {
  ajaxConfig: ajaxConfig,

  url: function() {
    return [api.url, this.endpoint, this.getId()].join('/');
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
