'use strict';

var Events = require('ampersand-events');
var assign = require('lodash.assign');
global.Buffer = global.Buffer || require('buffer').Buffer;


if(typeof btoa === 'undefined') {
  global.btoa = function(str) {
    return Buffer.from(str).toString('base64');
  };
}


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

    this.baseUrl = this.url = 'https://' + address + ':' + port + '/api/v2';
  },

  authenticate: function(username, password) {
    this.authorization = 'Basic ' + btoa([username, password].join(':'));
  },

  setCompany: function(company) {
    var name = company.name == undefined ? company : company.name;

    if(this.url.indexOf('companies') != -1) {
      this.url = this.url.split('/companies/')[0];
    }

    if(name) {
      this.url += '/companies/' + name;
    }
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
var purchasing = require('./models/purchasing');
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
  paymentMethod: paymentMethod,
  paymentTerms: paymentTerms,
  payroll: payroll,
  purchasing: purchasing,
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
