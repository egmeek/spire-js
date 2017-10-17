'use strict';

var base = require('./base');


var PaymentMethod = base.Model.extend({
  props: {
    id: 'any',
    code: 'string',
    description: 'string',
    accountNo: 'string',
    paymentType: {
      type: 'string',
      values: ['C', 'R', 'Q', 'D', 'O']
    },
    display: 'boolean',
    sequence: 'any',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  }
});


var PaymentMethodList = base.RESTCollection.extend({
  model: PaymentMethod,
  endpoint: 'payment_methods/',
  indexes: ['code']
});


module.exports = {
  PaymentMethod: PaymentMethod,
  PaymentMethodList: PaymentMethodList
};
