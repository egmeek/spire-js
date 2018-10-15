'use strict';

var base = require('./base');


var Inventory = base.Model.extend({
  endpoint: 'inventory/items',

  props: {
    id: 'any',
    whse: 'string',
    partNo: 'string',
    description: 'string',
    type: {
      type: 'string',
      values: ['N', 'V', 'M', 'K', 'R', 'C']
    },
    status: {
      type: 'any',
      values: [0, 1, 2]
    },
    hold: 'boolean',
    serialized: 'boolean',
    availableQty: 'decimal',
    onHandQty: 'decimal',
    backorderQty: 'decimal',
    committedQty: 'decimal',
    onPurchaseQty: 'decimal',
    currentCost: 'decimal',
    averageCost: 'decimal',
    standardCost: 'decimal',
    groupNo: 'string',
    salesDept: 'any',
    userDef1: 'string',
    userDef2: 'decimal',
    foregroundColor: 'any',
    backgroundColor: 'any',
    discountable: 'boolean',
    weight: 'decimal',
    packSize: 'decimal',
    unitOfMeasures: 'object',
    buyMeasureCode: 'string',
    stockMeasureCode: 'string',
    sellMeasureCode: 'string',
    allowBackorders: 'boolean',
    allowReturns: 'boolean',
    dutyPct: 'decimal',
    freightPct: 'decimal',
    manufactureCountry: 'string',
    harmonizedCode: 'string',
    extendedDescription: 'string',
    defaultExpiryDate: 'date',
    upload: 'boolean',
    lastModified: 'date',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  }
});


var InventoryList = base.RESTCollection.extend({
  model: Inventory,
  endpoint: 'inventory/items/'
});


var PriceMatrix = base.Model.extend({
  endpoint: 'inventory/price_matrix',
  props: {
    id: 'any',
    startDate: 'date',
    endDate: 'date',
    customerNo: 'string',
    whse: 'string',
    partNo: 'string',
    amountType: {
      type: 'string',
      values: ['P', 'D', 'M']
    },
    productCode: 'string',
    minimumQty: 'decimal',
    promoCode: 'string',
    amount: 'decimal',
    margin: 'decimal',
    vendorNo: 'string',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  }
});


var PriceMatrixList = base.RESTCollection.extend({
  model: PriceMatrix,
  endpoint: 'inventory/price_matrix/'
});


var SerialNumber = base.State.extend({
  props: {
    id: 'any',
    serialNumber: 'string',
    whse: 'string',
    partNo: 'string',
    committedQty: 'decimal',
    unitCost: 'decimal',
    sellPrice: 'decimal',
    expiryDate: 'date'
  }
});


var SerialNumberList = base.Collection.extend({
  model: SerialNumber,
  indexes: ['serialNumber']
});


var InventoryAdjustmentItem = base.State.extend({
  props: {
    id: 'any',
    description: 'string',
    receiveQty: 'decimal',
    cost: 'decimal',
    purchaseMeasure: 'string'
  },

  children: {
    inventory: Inventory
  },

  collections: {
    serials: SerialNumberList
  }
});


var InventoryAdjustmentItemList = base.Collection.extend({
  model: InventoryAdjustmentItem
});


var InventoryAdjustment = base.Model.extend({
  endpoint: 'inventory/adjustments',
  props: {
    id: 'any',
    adjustmentNo: 'string',
    receiveMode: {
      type: 'any',
      values: [1, 3]
    },
    date: 'date',
    referenceNo: 'string',
    sourceWhse: 'string',
    sourceLocation: 'string',
    destinationWhse: 'string',
    destinationLocation: 'string',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  },

  collections: {
    items: InventoryAdjustmentItemList
  }
});


var InventoryAdjustmentList = base.RESTCollection.extend({
  model: InventoryAdjustment,
  endpoint: 'inventory/adjustments/',
  indexes: ['adjustmentNo']
});


module.exports = {
  Inventory: Inventory,
  InventoryAdjustment: InventoryAdjustment,
  InventoryAdjustmentItem: InventoryAdjustmentItem,
  InventoryAdjustmentList: InventoryAdjustmentList,
  InventoryList: InventoryList,
  PriceMatrix: PriceMatrix,
  PriceMatrixList: PriceMatrixList,
  SerialNumberList: SerialNumberList
};
