# Sales

## Sales Order

A `SalesOrder` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the sales order |
| `orderNo` | String indicating the user-facing order number |
| `invoiceNo` | String indicating the user-facing invoice number |
| `customerNo` | String indicating the user-facing customer number |
| `status` | String indicating order status: `C` closed, `H` hold, `O` open, `L` layaway, `P` processed, `S` shipped |
| `type` | String indicating order type: `O` normal sales order, `B` booking order, `S` standing order, `Q` quote, `R` return order (RMA), `W` work order |
| `hold` | Boolean indicating the order is on hold |
| `orderDate` | Date order was placed |
| `invoiceDate` | Date order was converted to an invoice |
| `requiredDate` | Date customer requires order |
| `salespersonNo` | String indicating the user-facing salesperson code associated with this order |
| `contact` | Object with contact attributes |
| `customerPO` | String indicating customer purchase order number |
| `batchNo` | Integer indicating user-facing key of batch if company uses batch invoicing |
| `fob` | String indicating free on board contract terms |
| `referenceNo` | String indicating user reference number on the order |
| `shippingCarrier` | String indicating naming of shipping carrier/courier |
| `shipDate` | Date indicating when goods were shipped |
| `trackingNo` | String with order shipment tracking |
| `termsCode` | String indicating user-facing key of order payment terms |
| `freight` | Decimal indicating amount of freight on order |
| `subtotal` | Decimal indicating order subtotal for items shipped (excludes taxes, freight, discounts, levies) |
| `subtotalOrdered` | Decimal indicating order subtotal for all items on order including backorders (excludes taxes, freight, discounts) |
| `total` | Decimal indicating order total for items shipped |
| `totalOrdered` | Decimal indicating order total for all items on the order including backorders |
| `grossProfit` | Decimal indicating order gross profit |
| `customer` | [`Customer`](customer.md) model instance |
| `address` | Billing [`Address`](address.md) model instance |
| `shippingAddress` | Shipping [`Address`](address.md) model instance |
| `items` | Collection of [`SalesOrderItem`](#sales-order-item) model instances |
| `payments` | Collection of [`SalesOrderPayment`](#sales-order-payment) model instances |

## Sales Order Item

A `SalesOrderItem` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the sales order item |
| `whse` | Warehouse component of user-facing key of inventory associated with this item |
| `partNo` | Part number compnent of user-facing key of inventory associated with this item |
| `sequence` | Integer indicating order of items added to order |
| `description` | String describing inventory or job header |
| `comment` | String containing sales order item comments |
| `orderQty` | Decimal quantity of inventory ordered |
| `committedQty` | Decimal quantity of inventory committed from stock |
| `backorderQty` | Decimal quantity of inventory backordered (not shipped) |
| `unitPrice` | Decimal price of inventory per unit (used to calculate `extendedPriceCommitted` |
| `retailPrice` | Decimal retail price of inventory per unit |
| `discountable` | Boolean indicating item is discountable or not. If not order discount percent and discounting price rules will not apply to this item |
| `discountPct` | Decimal discount percentage applied to this item (see also `discountable`) |
| `discountAmt` | Decimal discount amount applied to this item (see also `discountable`) |
| `taxFlags` | Array of booleans indicating whether or not order taxes apply to this item |
| `sellMeasure` | User-facing unit of measure code for items sales measure |
| `vendor` | String indicating user-facing vendor code for purchases of this item |
| `levyCode` | String indicating user-facing levy code to apply to this item |
| `extendedPriceOrdered` | Decimal indicating the extended price of this item by ordered quantity |
| `extendedPriceCommitted` | Decimal indicating the extended price of this item by shipped quantity |

## Sales Order Payment

A `SalesOrderPayment` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the sales order payment |
| `method` | Integer foreign key of the [`PaymentMethod`](payment_method.md) associated with this record |
| `paymentDate` | Date indicating date of payment transaction |
| `authCode` | String indicating any authorization code from credit facilities |
| `transNo` | String indicating user-facing GL transaction number that was recorded for this payment |
| `layawayFlag` | Boolean indicating whether or not this payment was a layaway deposit |
