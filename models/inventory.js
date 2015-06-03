'use strict';

var base = require('./base');


var Inventory = base.Model.extend({
    endpoint: 'inventory',

    props: {
        id: 'any',
        whse: 'string',
        partNo: 'string'
    }
});

module.exports = {
    Inventory: Inventory
};
