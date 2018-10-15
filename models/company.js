'use strict';

var base = require('./base');

var Company = base.Model.extend({
  endpoint: 'companies',
  props: {
    name: 'string',
    description: 'string',
    valid: 'boolean',
    needs_upgrade: 'boolean',
    disk_space: 'any',
    locations: 'object',
    url: 'string'
  }
});


var CompanyList = base.RESTCollection.extend({
  model: Company,
  mainIndex: 'name',
  endpoint: 'companies/'
});


module.exports = {
  Company: Company,
  CompanyList: CompanyList
};
