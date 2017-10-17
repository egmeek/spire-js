'use strict';

var base = require('./base');
var Address = require('./address').Address;
var Vendor = require('./vendor').Vendor;
var Inventory = require('./inventory').Inventory;
var SerialNumberList = require('./inventory').SerialNumberList;


var PurchaseOrderItem = base.State.extend({
  props: {
    id: 'any',
    whse: 'string',
    partNo: 'string',
    sequence: 'any',
    description: 'string',
    orderQty: 'decimal',
    receiveQty: 'decimal',
    receivedQty: 'decimal',
    unitPrice: 'decimal',
    purchaseMeasure: 'string',
    taxFlags: 'array'
  },

  children: {
    inventory: Inventory
  },

  collections: {
    serials: SerialNumberList
  }
});


var PurchaseOrderItemList = base.Collection.extend({
  model: PurchaseOrderItem
});


var PurchaseOrder = base.Model.extend({
  endpoint: 'purchasing/orders',

  props: {
    id: 'any',
    number: 'string',
    status: {
      type: 'string',
      values: ['C', 'H', 'O', 'R', 'I', 'S']
    },
    date: 'date',
    hold: 'boolean',
    vendorPO: 'string',
    fob: 'string',
    referenceNo: 'string',

    freight: 'decimal',
    subtotal: 'decimal',
    total: 'decimal',

    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  },

  children: {
    vendor: Vendor,
    address: Address,
    shippingAddress: Address
  },

  collections: {
    items: PurchaseOrderItemList
  }
});


var PurchaseOrderList = base.RESTCollection.extend({
  model: PurchaseOrder,
  endpoint: 'purchasing/orders/'
});


var PurchaseHistory = base.State.extend({
  props: {
    id: 'any',
    number: 'string',
    vendorPO: 'string',
    status: {
      type: 'string',
      values: ['C', 'H', 'O', 'R', 'I', 'S']
    },
    invoiceNo: 'string',
    date: 'date',
    buyer: 'string',
    shipCode: 'string',
    referenceNo: 'string',
    FOB: 'string',
    requiredDate: 'date',
    receivedDate: 'date',
    subTotal: 'decimal',
    currency: 'string',
    jobNo: 'string',
    jobAccountNo: 'string'
  },

  children: {
    vendor: Vendor
  }
});


var PurchaseHistoryList = base.RESTCollection.extend({
  model: PurchaseHistory,
  endpoint: 'purchasing/history/'
});


module.exports = {
  PurchaseOrder: PurchaseOrder,
  PurchaseOrderList: PurchaseOrderList,
  PurchaseOrderItem: PurchaseOrderItem,
  PurchaseHistory: PurchaseHistory,
  PurchaseHistoryList: PurchaseHistoryList
};
