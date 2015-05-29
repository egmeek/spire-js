var Model = require('ampersand-model');
var State = require('ampersand-state');
var Collection = require('ampersand-collection');
var RESTCollection = require('ampersand-rest-collection');

var app = require('../app');


var ajaxConfig = function() {
    return {
        headers: {
            'Authorization': app.authorization()
        }
    }
};


module.exports.State = State;


module.exports.Model = Model.extend({
    ajaxConfig: ajaxConfig,

    url: function() {
        return [app.url, this.endpoint, this.getId()].join('/');
    }
});

module.exports.RESTCollection = RESTCollection.extend({
    url: function() {
        return app.url + '/' + this.endpoint;
    },

    ajaxConfig: ajaxConfig,

    parse: function(res, options) {
        return res['records'];
    }
});
