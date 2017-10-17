# Territory

A `Territory` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the territory or `null` if this is a new territory. |
| `code` | Returns the user-facing key of the territory. (indexed field) |
| `description` | Returns the territory description. |
| `created` | UTC timestamp indicating the time the territory was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the territory was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this territory. |
