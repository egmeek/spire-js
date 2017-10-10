'use strict';

var base = require('./base');
var Customer = require('./customer').Customer;
var Inventory = require('./inventory').Inventory;

var SalesOrderItem = base.State.extend({
  props: {
    id: 'any',
    partNo: 'string',
    whse: 'string',
    sequence: 'any',
    description: 'string',
    orderQty: 'decimal',
    committedQty: 'decimal',
    backorderQty: 'decimal',
    unitPrice: 'decimal',
    extendedPriceOrdered: 'decimal',
    extendedPriceCommitted: 'decimal'
  },

  children: {
    inventory: Inventory
  }
});


var SalesOrderItems = base.Collection.extend({
  model: SalesOrderItem
});


var SalesOrder = base.Model.extend({
  endpoint: 'sales/orders',

  props: {
    id: 'any',
    orderNo: 'string',
    invoiceNo: 'string',
    customerNo: 'string',
    status: 'string',
    orderType: 'string',
    holdOrder: 'boolean',
    orderDate: 'date',
    invoiceDate: 'date',
    requiredDate: 'date',

    subtotal: 'decimal',
    total: 'decimal',
    total2: 'decimal',

    modifiedUser: 'string',
  },

  children: {
    customer: Customer
  },

  collections: {
    items: SalesOrderItems
  }
});


var SalesOrders = base.RESTCollection.extend({
  model: SalesOrder,
  endpoint: 'sales/orders/'
});


module.exports = {
  SalesOrder: SalesOrder,
  SalesOrders: SalesOrders
};
