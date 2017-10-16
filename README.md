# Spire JavaScript Client

This package provides convenient access to the Spire REST API from applications
written in JavaScript.

## Installation

Install the package with:

    npm install git+https://git@github.com/spiresystems/spire-js

## Usage

### Connect to Your Spire Server

```javascript
var spire = require('spire');
spire.connectServer(address, port);
```

### Listing Companies

To return an array of companies that have been setup on your Spire server,
create a `CompanyList` instance and call `fetch`:

```javascript
var companies = new spire.company.CompanyList();
companies.fetch({
  success: function(results) {
    var company = results.get('inspire');
    // Do stuff with company...
  }
});
```

A `Company` instance has the following attributes:

|  | Returns
--- | ---
| `name` | Returns the short name of the company. |
| `description` | The long name of the company. |
| `valid` | Returns whether this company can be connected to. Invalid companies generally have a configuration or database connection problem. |
| `needs_upgrade` | Indicates whether or not this company needs a database upgrade to its current server version. If this is true requests to this company will fail with a precondition error until the company has been upgraded with the Spire system tray applicaiton. |
| `disk_space` | Indicates the company's database size in bytes. |
| `url` | The API root for this company's data. |
| `locations` | Returns a JavaScript object with location code and name keys and values. |

### Authenticate a User

Provide a `Company` instance obtained above, or a company name (`string`) as the
company argument here, followed by a username and password supplied by a user:

```javascript
spire.authenticate(company, username, password);
```

### Working With Collections

The following collections are provided by this package:

|  | Description |
| --- | --- |
| `spire.company.CompanyList` | Companies |
| `spire.customer.CustomerList` | Customers |
| `spire.employee.EmployeeList` | Employees |
| `spire.gl.GLAccountList` | GL Accounts |
| `spire.gl.GLTransactionList` | GL Transactions |
| `spire.inventory.InventoryAdjustmentList` | Inventory Adjustments and Transfers |
| `spire.inventory.InventoryList` | Inventory |
| `spire.inventory.PriceMatrixList` | Price Matrices |
| `spire.job.JobList` | Jobs |
| `spire.paymentMethod.PaymentMethodList` | Payment Methods |
| `spire.paymentTerms.PaymentTermsList` | Payment Methods |
| `spire.payroll.TimecardList` | Timecards |
| `spire.production.ProductionHistoryList` | Production History |
| `spire.production.ProductionOrderList` | Production Orders |
| `spire.production.ProductionTemplateList` | Production Templates |
| `spire.purchasing.PurchaseHistoryList` | Purchase History |
| `spire.purchasing.PurchaseOrderList` | Purchase Orders |
| `spire.sales.SalesHistoryList` | Sales History |
| `spire.sales.SalesOrderList` | Sales Orders |
| `spire.salesperson.SalespersonList` | Salespeople |
| `spire.territory.TerritoryList` | Territories |
| `spire.vendor.VendorList` | Vendors |

Collections can be queried by providing an object to the `fetch()` method:

```javascript
var salesOrders = new spire.sales.SalesOrderList();

salesOrders.fetch({
  data: {
    start: 0,                // Starting offset
    limit: 100,              // Limit number of results
    //fields: 'id,orderNo',  // Comma separated list of fields to return (defaults to all fields)
    //q: 'search query',     // Search for keywords

    // Filter results
    filter: JSON.stringify({
        orderDate: spire.utils.formatDate(new Date())  // Today's orders
    })
  },

  success: function(collection, response, options) {
    // Actions to perform on success
    collection.map(function(order) {
      console.log(order);
    });
  },

  error: function(collection, response, options) {
    // Actions to perform on error
  },

  reset: false  // Reset collection with new objects or append to it
                // (defaults to append)
});
```

Alternately, you can get a specific record from the server using the
`getOrFetch` method on the collection:

```javascript
salesOrders.getOrFetch(1, function(err, model) {
  if(err) {
    console.log('An error occurred');
  } else {
    console.log(model);
  }
});
```

Once a collection is populated with model instances (following a successful
`fetch`) you can `get` a specific ID from the collection using either its
primary key (usually 'id'), or by specifying a user facing identifier like
'orderNo' (this may not work in all cases).

```javascript
salesOrders.get(1);

// OR

salesOrders.get('00000100-0', 'orderNo');
```

More information about working with collections can be found here:

[ampersand-rest-collection](https://ampersandjs.com/docs/#ampersand-rest-collection)

### Working With Objects

The create, read, update, delete (CRUD) functions are provided by the following
methods on a Model instance:

| Method | Description
| --- | --- |
| `save` | Creates the object if new (`POST`), otherwise updates it (`PUT`) |
| `destroy` | Attempts to delete the object (`DELETE`) |
| `fetch` | Refreshes the object from the server |

To load a specific object by ID:

```javascript
var salesOrder = new spire.sales.SalesOrder({id: 1});
SalesOrder.fetch({
  success: function() {
    console.log('Successfully loaded object');
  },

  error: function() {
    console.log('An error occurred');
  }
});
```

To delete an object:

```javascript
salesOrder.destroy({
  success: function() {
    console.log('Successfully deleted object');
  },

  error: function() {
    console.log('An error occurred');
  }
});
```

Change an attribute and update the object:

```javascript
salesOrder.requiredDate = spire.utils.formatDate(new Date());
salesOrder.save();
```

More information about working with individual Model objects can be found here:

[ampersand-model](https://ampersandjs.com/docs/#ampersand-model)

### Custom Types

#### Decimal

Generally values returned from the Spire API as JSON map to native JavaScript
types. A notable exception is decimal values returned from the Spire API as
`string`s. It is inconvenient to work with `string` and `int` objects for
business operations, and native floating point `Numeric` objects won't work for
this purpose, so this library provides a `types.Decimal` type. Objects returned
from the API are automatically deserialized with this type where necessary, and
serialized back to `string`s for persistence operations. The decimal type
currently employed is actually a [big.js](http://mikemcl.github.io/big.js)
object that has been lightly modified to add thousands separators via the
`format()` method.

Example:

```javascript
var dec = new spire.types.Decimal('1021.25');
dec.format();
// $1,021.25
```

### Utilities

#### Date Formatting

The Spire API expects local date strings to be in the format 'YYYY-MM-DD' for
communication with the server. The `spire.utils` namespace provides the
`formatDate` function that will take a JavaScript Date object and serialize it
into a string in the expected format.

```javascript
spire.utils.formatDate(new Date());
// '2017-10-16'
```
