// Copyright(c) 2015 Spire Systems Inc.
//
// Main interface to the spire-client API
//

var Events = require('ampersand-events');
var assign = require('lodash.assign');


var app = {
    // Initialize access to the Spire API
    //   url - The root URL of the company to access
    init: function(url, username, password) {
        this.url = url;
        this.auth_info = [username, password];
    },

    authorization: function() {
        return 'Basic ' + window.btoa(this.auth_info.join(':'));
    }
};

Events.createEmitter(app);
module.exports = app;


// Populate the api here to prevent circular reference problems
var customer = require('./models/customer');

assign(app, {
    customers: new customer.Customers(),

});

