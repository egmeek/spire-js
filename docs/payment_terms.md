# Payment Terms

A `Payment Terms` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the payment terms or `null` if this is a new payment terms. |
| `code` | Returns the user-facing key of the payment terms. (indexed field) |
| `description` | Returns the description of the payment terms. |
| `daysBeforeDue` | Number of days before payment is due. |
| `daysAllowed` | Number of days allowed for early payment discount to apply. |
| `discountRate` | `Decimal` object indicating the rate of the terms discount for early payment. |
| `applyDiscountToNet` | Boolean indicating whether the discount should be applied to the net invoice amount amount, otherwise the full invoice amount. |
| `applyDiscountToFreight` | Boolean indicating whether the discount should be applied to freight amount. |
| `created` | UTC timestamp indicating the time the payment terms was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the payment terms was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this Payment Terms. |
