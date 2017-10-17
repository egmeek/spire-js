# Customer

A `Customer` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the customer or `null` if this is a new customer. |
| `name` | Customer's name |
| `customerNo` | Returns the user-facing key of the customer. (indexed field) |
| `code` | See `customerNo` (indexed field) |
| `hold` | Boolean indicating whether or not this customer is on hold. |
| `status` | Customer status: `A` indicates the customer is active, `I` indicates the customer is inactive, and `P` indicates the customer is a new prospect. |
| `reference` | Reference field. |
| `address` | Returns [`Address`](address.md) object. |
| `shippingAddresses` | Returns array of [`Address`](address.md) objects. |
| `paymentTerms` | Returns [`PaymentTerms`](payment_terms.md) object. |
| `applyFinanceCharges` | Boolean indicating whether or not to apply finance charges to this customer. |
| `foregroundColor` | Base 10 integer indicating a custom RGBA text color. |
| `backgroundColor` | Base 10 integer indicating a custom RGBA background color. |
| `creditType` | Customer credit type: 0 indicates the customer has no  credit, 1 indicates the customer has unlimited credit, 2 indicates the customer has limited credit. |
| `creditLimit` | For customers with limited credit, returns `Decimal` indicating credit limit or `null` for those without. |
| `creditBalance` | Indicates customers current credit balance. |
| `currency` | Returns string indicating the currency code of the customer. Customers in base currency will have an empty string. |
| `userDef1` | Returns the value of the customer's user defined 1 field. |
| `userDef2` | Returns the value of the customer's user defined 2 field. |
| `discount` | Returns the customer's discount percentage. |
| `receivableAccount` | Returns the customer's accounts receivable GL account. |
| `defaultShipTo` | Returns the customer's default ship to address ID. |
| `upload` | Boolean indicating whether or not this customer should be uploaded to a web store or third-party integration. |
| `lastModified` | UTC time the customer was last modified including modifications made by the system that would not otherwise be captured by the `modified` field. This field should be used for updating any external caches. |
| `created` | UTC timestamp indicating the time the customer was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the customer was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this customer. |
