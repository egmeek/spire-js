'use strict';

var base = require('./base');


var PaymentTerms = base.Model.extend({
  endpoint: 'payment_terms',
  props: {
    id: 'any',
    code: 'string',
    description: 'string',
    daysBeforeDue: 'any',
    daysAllowed: 'any',
    discountRate: 'decimal',
    applyDiscountToNet: 'boolean',
    applyDiscountToFreight: 'boolean',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  }
});


var PaymentTermsList = base.RESTCollection.extend({
  model: PaymentTerms,
  endpoint: 'payment_terms/',
  indexes: ['code']
});


module.exports = {
  PaymentTerms: PaymentTerms,
  PaymentTermsList: PaymentTermsList
};
