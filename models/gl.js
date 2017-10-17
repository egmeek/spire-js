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


var ExchangeRate = base.State.extend({
  props: {
    method: 'string',
    rate: 'decimal'
  }
});


var GLTransactionItem = base.State.extend({
  props: {
    id: 'any',
    recno: 'any',
    division: 'string',
    reconcileDate: 'date',
    reconcileFlag: 'boolean',
    whereFrom: 'string',
    memoWho: 'string',
    memoKey: 'string',
    memoTran: 'string',
    baseDebitAmount: 'decimal',
    baseCreditAmount: 'decimal',
    foreignDebitAmount: 'decimal',
    foreignCreditAmount: 'decimal'
  },

  children: {
    account: GLAccount,
    exchangeRate: ExchangeRate
  }
});


var GLTransactionItemList = base.Collection.extend({
  model: GLTransactionItem
});


var GLTransaction = base.Model.extend({
  endpoint: 'gl/transactions',
  props: {
    id: 'any',
    transNo: 'string',
    date: 'date'
  },

  children: {
    items: GLTransactionItemList
  }
});


var GLTransactionList = base.RESTCollection.extend({
  endpoint: 'gl/transactions/',
  model: GLTransaction
});


module.exports = {
  GLAccount: GLAccount,
  GLAccountList: GLAccountList,
  GLTransaction: GLTransaction,
  GLTransactionItem: GLTransactionItem,
  GLTransactionList: GLTransactionList
};
