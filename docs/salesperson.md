# Salesperson

A `Salesperson` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the salesperson or `null` if this is a new salesperson. |
| `salespersonNo` | Returns the user-facing key of the salesperson. (indexed field) |
| `code` | See `salespersonNo` (indexed field) |
| `name` | Returns the name of the salesperson. |
| `created` | UTC timestamp indicating the time the salesperson was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the salesperson was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this salesperson. |
