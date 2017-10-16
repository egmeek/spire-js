'use strict';

var base = require('./base');

var Company = base.Model.extend({
  endpoint: '',
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
  endpoint: '',

  parse: function(response, options) {
    return response.companies;
  }
});


module.exports = {
  Company: Company,
  CompanyList: CompanyList
};
