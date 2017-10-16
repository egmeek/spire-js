'use strict';

var base = require('./base');

var Inventory = base.Model.extend({
  endpoint: 'inventory',

  props: {
    id: 'any',
    whse: 'string',
    partNo: 'string',
    description: 'string'
  }
});


var InventoryList = base.RESTCollection.extend({
  model: Inventory,
  endpoint: 'inventory/items/'
});


module.exports = {
  Inventory: Inventory,
  InventoryList: InventoryList
};
