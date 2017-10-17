# Purchasing

## Purchase Order

A `PurchaseOrder` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the purchase order |
| `number` | String indicating the user-facing order number |
| `status` | String indicating order status: `C` closed, `H` hold, `O` open, `I` issued , `R` received, `S` standing |
| `hold` | Boolean indicating the order is on hold |
| `date` | Date order was placed |
| `vendorPO` | String indicating vendor purchase order number |
| `fob` | String indicating free on board contract terms |
| `referenceNo` | String indicating user reference number on the order |
| `freight` | Decimal indicating amount of freight on order |
| `subtotal` | Decimal indicating order subtotal for items shipped (excludes taxes, freight, discounts, levies) |
| `total` | Decimal indicating order total for items shipped |
| `vendor` | [`Vendor`](vendor.md) model instance |
| `address` | Billing [`Address`](address.md) model instance |
| `shippingAddress` | Shipping [`Address`](address.md) model instance |
| `items` | Collection of [`PurchaseOrderItem`](#purchase-order-item) model instances |

## Purchase Order Item

A `PurchaseOrderItem` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the purchase order item |
| `whse` | Warehouse component of user-facing key of inventory associated with this item |
| `partNo` | Part number compnent of user-facing key of inventory associated with this item |
| `sequence` | Integer indicating order of items added to order |
| `description` | String describing inventory or job header |
| `orderQty` | Decimal quantity of inventory ordered |
| `receiveQty` | Decimal quantity of inventory committed from stock |
| `receivedQty` | Decimal quantity of inventory backordered (not shipped) |
| `unitPrice` | Decimal price of inventory per unit |
| `taxFlags` | Array of booleans indicating whether or not order taxes apply to this item |
| `purchaseMeasure` | User-facing unit of measure code for items purchase measure |

## Purchase History

A `PurchaseHistory` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the purchase history record |
| `number` | String indicating the user-facing purchase order number |
| `status` | String indicating order status: `C` closed, `H` hold, `O` open, `I` issued , `R` received, `S` standing |
| `date` | Date order was placed |
| `vendorPO` | String indicating vendor purchase order number |
| `invoiceNo` | String indicating user-facing purchase history key |
| `FOB` | String indicating free on board contract terms |
| `shipCode` | String indicating ship via user-facing key |
| `referenceNo` | String indicating user reference number on the order |
| `subtotal` | Decimal indicating order subtotal for items shipped (excludes taxes, freight, discounts, levies) |
| `total` | Decimal indicating order total for items shipped |
| `currency` | String indicating user-facing currency code for this order. Base currency orders will have an empty string |
| `jobNo` | String indicating user-facing job cost code for this order |
| `jobAccountNo` | String indicating user-facing job account code for this order |
| `vendor` | [`Vendor`](vendor.md) model instance |

Note: `PurchaseHistory` is awaiting the completion of a full history endpoint in
the Spire API before `items` and `address` and `shippingAddress` properties will
be available.
