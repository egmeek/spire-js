'use strict';

var base = require('./base');

var Address = require('./address').Address;
var AddressList = require('./address').AddressList;
var PaymentTerms = require('./payment_terms').PaymentTerms;


var Customer = base.Model.extend({
  endpoint: 'customers',
  props: {
    id: 'any',
    customerNo: 'string',
    code: 'string',
    name: 'string',
    foregroundColor: 'any',
    backgroundColor: 'any',
    status: {
      type: 'string',
      values: ['A', 'I', 'P']
    },
    hold: 'boolean',
    reference: 'string',
    applyFinanceCharges: 'boolean',
    creditType: {
      type: 'any',
      values: [0, 1, 2]
    },
    creditLimit: 'decimal',
    creditBalance: 'decimal',
    currency: 'string',
    userDef1: 'string',
    userDef2: 'string',
    discount: 'decimal',
    receivableAccount: 'string',
    defaultShipTo: 'string',
    upload: 'boolean',
    lastModified: 'date',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  },

  children: {
    address: Address,
    //shippingAddresses: AddressList,
    paymentTerms: PaymentTerms
  }
});


var CustomerList = base.RESTCollection.extend({
  model: Customer,
  endpoint: 'customers/',
  indexes: ['customerNo', 'code']
});


module.exports = {
  Customer: Customer,
  CustomerList: CustomerList
};
