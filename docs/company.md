# Company

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
