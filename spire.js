'use strict';

var Events = require('ampersand-events');
var assign = require('lodash.assign');


var app = {
  // Initialize access to the Spire API
  //   url - The root URL of the company to access

  connectServer: function(address, port) {
    if(port === undefined)
      port = 10880;

    if(address.indexOf('http') != -1) {
      this.url = address;
      return;
    }

    this.url = 'https://' + address + ':' + port + '/api/v1/companies';
  },

  authenticate: function(company, username, password) {
    if(company.name === undefined) {
      this.url += '/' + company;
    } else {
      this.url += '/' + company.name;
    }

    this.auth_info = [username, password];
  },

  authorization: function() {
    if(this.auth_info === undefined)
      return;
    return 'Basic ' + window.btoa(this.auth_info.join(':'));
  }
};

Events.createEmitter(app);
module.exports = app;


// Populate the api here to prevent circular reference problems
var company = require('./models/company');
var customer = require('./models/customer');
var sales = require('./models/sales');

assign(app, {
  types: {
    Decimal: require('./types').Decimal
  },
  utils: {
    formatDate: require('./utils').formatDate
  },
  company: company,
  customer: customer,
  sales: sales
});
