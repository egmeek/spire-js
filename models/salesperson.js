'use strict';

var base = require('./base');


var Salesperson = base.Model.extend({
  endpoint: 'salesperson',
  props: {
    id: 'any',
    salespersonNo: 'string',
    code: 'string',
    name: 'string',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  }
});


var SalespersonList = base.RESTCollection.extend({
  model: Salesperson,
  endpoint: 'salespeople/',
  indexes: ['salespersonNo', 'code']
});


module.exports = {
  Salesperson: Salesperson,
  SalespersonList: SalespersonList
};
