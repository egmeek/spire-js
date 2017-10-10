'use strict';

var base = require('./base');

var Address = require('./address').Address;

var Customer = base.Model.extend({
  endpoint: "customers",
  props: {
    id: 'any',
    customerNo: 'string',
    name: 'string',
    status: {
      type: 'string',
//    values: ['active', 'inactive', 'prospect']
    },
    hold: 'boolean'
  },

  children: {
    address: Address
  }
});


var Customers = base.RESTCollection.extend({
  model: Customer,
  endpoint: "customers/"
});


module.exports.Customer = Customer;
module.exports.Customers = Customers;
