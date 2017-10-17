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
      values: ['N', 'V', 'M', 'K', 'R']
    },
    status: {
      type: 'any',
      values: [0, 1, 2]
    },
    hold: 'boolean',
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


module.exports = {
  Inventory: Inventory,
  InventoryList: InventoryList,
  PriceMatrix: PriceMatrix,
  PriceMatrixList: PriceMatrixList
};
