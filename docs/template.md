# Template

A `Template` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the template or `null` if this is a new template. |
| `templateNo` | Returns the user-facing key of the template. (indexed field) |
| `code` | See `templateNo` (indexed field) |
| `name` | Returns the name of the template. |
| `created` | UTC timestamp indicating the time the template was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the template was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this template. |
