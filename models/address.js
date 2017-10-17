'use strict';

var base = require('./base');
var Salesperson = require('./salesperson').Salesperson;
var Territory = require('./territory').Territory;


var Phone = base.State.extend({
  props: {
    number: 'string',
    format: 'number'
  }
});


var ContactsCollection = base.Collection.extend({
  props: {
    name: 'string',
    email: 'string'
  },

  children: {
    phone: Phone,
    fax: Phone
  }
});


var Address = base.State.extend({
  props: {
    id: 'any',
    type: {
      type: 'string',
      values: ['B', 'S']
    },
    shipId: 'string',
    name: 'string',
    streetAddress: 'string',
    city: 'string',
    provState: 'string',
    postalCode: 'string',
    country: 'string',
    email: 'string',
    website: 'string'
  },

  children: {
    phone: Phone,
    fax: Phone,
    salesperson: Salesperson,
    territory: Territory
  },

  collections: {
    contacts: ContactsCollection
  }
});


var AddressList = base.Collection.extend({
  model: Address
});


module.exports = {
  Address: Address,
  AddressList: AddressList
};
