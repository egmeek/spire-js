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
                return { type: 'decimal', val: new Decimal(val) };
            },
            compare: function(curval, newval, attr) {
                if(typeof curval !== 'object' ||
                        typeof newval !== 'object' ||
                        curval.constructor !== newval.constructor)
                    return false;

                return curval.equals(newval);
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

    parse: function(res, options) {
        return res['records'];
    }
});
