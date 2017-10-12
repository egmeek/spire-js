'use strict';

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
    if(this.auth_info === undefined)
      throw 'API has not been initialized; see init()';
    return 'Basic ' + window.btoa(this.auth_info.join(':'));
  }
};

Events.createEmitter(app);
module.exports = app;


// Populate the api here to prevent circular reference problems
var customer = require('./models/customer');
var sales = require('./models/sales');

assign(app, {
  types: {
    Decimal: require('./types').Decimal
  },
  utils: {
    formatDate: require('./utils').formatDate
  },
  customer: customer,
  sales: sales
});
