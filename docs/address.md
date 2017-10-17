# Address

An `Address` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the address or `null` if this is a new address. |
| `type` | Address type: `B` indicates a billing address, `S` indicates a shipping address. |
| `shipId` | Returns the user-facing key of the vendor. (indexed field, required for shipping addresses) |
| `name` | String indicating the name associated with this address |
| `streetAddress` | String indicating the physical location for this address (may contain newline characters) |
| `city` | String indicating the city for this address |
| `provState` | String indicating the province or state for this address |
| `postalCode` | String indicating the postal code or zip code for this address |
| `country` | String indicating address country |
| `email` | String indicating the primary email address for this record |
| `website` | String indicating website URL for this address |
| `phone` | Object containing `number` and `format` indicating the phone number for this address |
| `fax` | Object containing `number` and `format` indicating the fax number for this address |
| `salesperson` | Object containing the salesperson and its attributes associated with this address |
| `territory` | Object containing the territory and its attributes associated with this address |
| `contacts` | Collection of contacts for this address. Each contact contains `name`, `email`, `phone`, and `fax` attributes |
