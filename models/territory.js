'use strict';

var base = require('./base');


var Territory = base.Model.extend({
  endpoint: 'territory',
  props: {
    id: 'any',
    code: 'string',
    description: 'string',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  }
});


var TerritoryList = base.RESTCollection.extend({
  model: Territory,
  endpoint: 'territories/',
  indexes: ['code']
});


module.exports = {
  Territory: Territory,
  TerritoryList: TerritoryList
};
