var base = require('./base');


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
        fax: Phone
    },

    collections: {
        contacts: ContactsCollection
    }
});


module.exports = {
    Address: Address
};
