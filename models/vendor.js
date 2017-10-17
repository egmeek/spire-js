'use strict';

var base = require('./base');
var Address = require('./address').Address;
var AddressList = require('./address').AddressList;
var PaymentTerms = require('./payment_terms').PaymentTerms;


var Vendor = base.Model.extend({
  endpoint: 'vendors',
  props: {
    id: 'any',
    vendorNo: 'string',
    code: 'string',
    name: 'string',
    foregroundColor: 'any',
    backgroundColor: 'any',
    status: {
      type: 'string',
      values: ['A', 'I']
    },
    currency: 'string',
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


var VendorList = base.RESTCollection.extend({
  model: Vendor,
  endpoint: 'vendors/',
  indexes: ['vendorNo', 'code']
});


module.exports = {
  Vendor: Vendor,
  VendorList: VendorList
};
