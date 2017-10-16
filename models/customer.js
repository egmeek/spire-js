'use strict';

var base = require('./base');

var Address = require('./address').Address;

var Customer = base.Model.extend({
  endpoint: 'customers',
  props: {
    id: 'any',
    customerNo: 'string',
    name: 'string',
    foregroundColor: 'any',
    backgroundColor: 'any',
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


var CustomerList = base.RESTCollection.extend({
  model: Customer,
  endpoint: 'customers/',
  indexes: ['customerNo']
});


module.exports = {
  Customer: Customer,
  CustomerList: CustomerList
};
