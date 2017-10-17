# Payment Method

A `PaymentMethod` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the payment method or `null` if this is a new payment method. |
| `code` | Returns the user-facing key of the payment method. (indexed field) |
| `description` | Returns the description of the payment method. |
| `accountNo` | Returns the GL account no of the payment method. |
| `paymentType` | Payment type: `C` indicates cash, `R` indicates credit, `Q` indicates cheque, `D` indicates debit, `O` indicates other payment method type. |
| `display` | Boolean indicating whether this payment method is shown in prompts for payment. |
| `sequence` | Integer indicating what order to display this method in interfaces that prompt for payment. |
| `created` | UTC timestamp indicating the time the payment method was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the payment method was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this payment method. |
