# Vendor

A `Vendor` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the vendor or `null` if this is a new vendor. |
| `vendorNo` | Returns the user-facing key of the vendor. (indexed field) |
| `code` | See `vendorNo` (indexed field) |
| `name` | Name of the vendor |
| `status` | Vendor status: `A` indicates an active vendor, `I` indicates an inactive vendor. |
| `address` | Returns [`Address`](address.md) object. |
| `shippingAddresses` | Returns array of [`Address`](address.md) objects. |
| `paymentTerms` | Returns [`PaymentTerms`](payment_terms.md) object. |
| `currency` | Returns string indicating the currency code of the vendor. Vendors in base currency will have an empty string. |
| `foregroundColor` | Base 10 integer indicating a custom RGBA text color. |
| `backgroundColor` | Base 10 integer indicating a custom RGBA background color. |
| `created` | UTC timestamp indicating the time the vendor was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the vendor was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this vendor. |
