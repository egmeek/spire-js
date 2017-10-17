'use strict';

var base = require('./base');


var GLAccount = base.State.extend({
  props: {
    id: 'any',
    division: 'string',
    accountNo: 'string',
    currency: 'string',
    name: 'string',
    groupNo: 'string',
    group: 'object',
    accountType: {
      type: 'string',
      values: ['A', 'L', 'R', 'X']
    },
    debitBalance: 'decimal',
    creditBalance: 'decimal',
    foreignDebitBalance: 'decimal',
    foreignCreditBalance: 'decimal',
    allocation: 'boolean',
    segments: 'object'
  }
});


var GLAccountList = base.RESTCollection.extend({
  endpoint: 'gl/accounts',
  model: GLAccount
});


module.exports = {
  GLAccount: GLAccount,
  GLAccountList: GLAccountList
};
