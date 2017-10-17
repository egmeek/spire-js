'use strict';

var base = require('./base');
var Address = require('./address').Address;
var Customer = require('./customer').Customer;
var Inventory = require('./inventory').Inventory;
var SerialNumberList = require('./inventory').SerialNumberList;


var OrderSalesTax = base.State.extend({
  props: {
    code: 'string',
    name: 'string',
    shortName: 'string',
    rate: 'decimal',
    exemptNo: 'string',
    total: 'decimal'
  }
});


var OrderSalesTaxList = base.Collection.extend({
  model: OrderSalesTax
});


var SalesOrderItem = base.State.extend({
  props: {
    id: 'any',
    whse: 'string',
    partNo: 'string',
    sequence: 'any',
    description: 'string',
    comment: 'string',
    orderQty: 'decimal',
    committedQty: 'decimal',
    backorderQty: 'decimal',
    unitPrice: 'decimal',
    retailPrice: 'decimal',
    discountable: 'boolean',
    discountPct: 'decimal',
    discountAmt: 'decimal',
    taxFlags: 'array',
    sellMeasure: 'string',
    vendor: 'string',
    levyCode: 'string',
    extendedPriceOrdered: 'decimal',
    extendedPriceCommitted: 'decimal'
  },

  children: {
    inventory: Inventory
  },

  collections: {
    serials: SerialNumberList
  }
});


var SalesOrderItemList = base.Collection.extend({
  model: SalesOrderItem
});


var SalesOrderPayment = base.State.extend({
  props: {
    id: 'any',
    method: 'any',
    paymentDate: 'date',
    authCode: 'string',
    transNo: 'string',
    layawayFlag: 'boolean'
  }
});


var SalesOrderPaymentList = base.Collection.extend({
  model: SalesOrderPayment
});


var SalesOrder = base.Model.extend({
  endpoint: 'sales/orders',

  props: {
    id: 'any',
    orderNo: 'string',
    invoiceNo: 'string',
    customerNo: 'string',
    status: {
      type: 'string',
      values: ['C', 'H', 'O', 'L', 'P', 'S']
    },
    type: {
      type: 'string',
      values: ['O', 'B', 'S', 'Q', 'R', 'W']
    },
    hold: 'boolean',
    orderDate: 'date',
    invoiceDate: 'date',
    requiredDate: 'date',
    salespersonNo: 'string',
    contact: 'object',
    customerPO: 'string',
    batchNo: 'any',
    fob: 'string',
    referenceNo: 'string',
    shippingCarrier: 'string',
    shipDate: 'date',
    trackingNo: 'string',
    termsCode: 'string',

    freight: 'decimal',
    subtotal: 'decimal',
    subtotalOrdered: 'decimal',
    total: 'decimal',
    totalOrdered: 'decimal',
    grossProfit: 'decimal',

    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  },

  children: {
    customer: Customer,
    address: Address,
    shippingAddress: Address
  },

  collections: {
    items: SalesOrderItemList,
    payments: SalesOrderPaymentList,
    taxes: OrderSalesTaxList
  }
});


var SalesOrderList = base.RESTCollection.extend({
  model: SalesOrder,
  endpoint: 'sales/orders/'
});


var SalesHistoryPayment = base.State.extend({
  props: {
    id: 'any',
    method: 'any',
    amount: 'decimal'
  }
});


var SalesHistoryPaymentList = base.Collection.extend({
  model: SalesHistoryPayment
});


var SalesHistoryItem = base.State.extend({
  props: {
    id: 'any',
    invoiceNo: 'string',
    sequence: 'any',
    whse: 'string',
    partNo: 'string',
    description: 'string',
    comment: 'string',
    orderQty: 'decimal',
    committedQty: 'decimal',
    backorderQty: 'decimal',
    retailPrice: 'decimal',
    unitPrice: 'decimal',
    lineDiscountPct: 'decimal',
    taxFlags: 'array',
    sellMeasure: 'string',
    extendedPriceOrdered: 'decimal',
    extendedPriceCommitted: 'decimal'
  },

  children: {
    inventory: Inventory
  },

  collections: {
    serials: SerialNumberList
  }
});


var SalesHistoryItemList = base.Collection.extend({
  model: SalesHistoryItem
});


var SalesHistory = base.Model.extend({
  endpoint: 'sales/invoices',
  props: {
    id: 'any',
    invoiceNo: 'string',
    orderNo: 'string',
    division: 'string',
    location: 'string',
    profitCentre: 'string',
    currency: 'string',
    orderDate: 'date',
    invoiceDate: 'date',
    requiredDate: 'date',
    customerPO: 'string',
    fob: 'string',
    referenceNo: 'string',
    shippingCarrier: 'string',
    shipDate: 'string',
    trackingNo: 'string',
    termsCode: 'string',
    termsText: 'string',
    freight: 'decimal',
    subtotal: 'decimal',
    total: 'decimal'
  },

  children: {
    customer: Customer,
    address: Address,
    shippingAddress: Address,
  },

  collections: {
    items: SalesHistoryItemList,
    payments: SalesHistoryPaymentList,
    taxes: OrderSalesTaxList
  }
});


var SalesHistoryList = base.RESTCollection.extend({
  model: SalesHistory,
  endpoint: 'sales/invoices/'
});


module.exports = {
  SalesOrder: SalesOrder,
  SalesOrderList: SalesOrderList,
  SalesOrderItem: SalesOrderItem,
  SalesOrderPayment: SalesOrderPayment,
  SalesHistory: SalesHistory,
  SalesHistoryList: SalesHistoryList
};
