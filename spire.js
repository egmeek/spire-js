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
    return 'Basic ' + btoa(this.auth_info.join(':'));
  }
};

Events.createEmitter(app);
module.exports = app;


var company = require('./models/company');
var customer = require('./models/customer');
var employee = require('./models/employee');
var gl = require('./models/gl');
var inventory = require('./models/inventory');
var paymentMethod = require('./models/payment_method.js');
var paymentTerms = require('./models/payment_terms.js');
var payroll = require('./models/payroll');
var sales = require('./models/sales');
var salesperson = require('./models/salesperson');
var territory = require('./models/territory');
var vendor = require('./models/vendor');

assign(app, {
  company: company,
  customer: customer,
  employee: employee,
  gl: gl,
  inventory: inventory,
  payroll: payroll,
  paymentMethod: paymentMethod,
  paymentTerms: paymentTerms,
  sales: sales,
  salesperson: salesperson,
  territory: territory,
  vendor: vendor,

  types: {
    Decimal: require('./types').Decimal
  },

  utils: {
    formatDate: require('./utils').formatDate
  }
});
