# Inventory

An `Inventory` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the inventory or `null` if this is a new inventory item. |
| `whse` | Warehouse inventory belongs to. |
| `partNo` | Inventory user-facing identifier (along with whse). |
| `description` | Inventory short description. |
| `type` | Inventory type: `N` normal, `V` non-physical, `M` manufactured, `K` kitted, `R` raw material. |
| `status` | Inventory status: `0` active, `1` on hold (deprecated), `2` inactive. |
| `hold` | Boolean indicating whether inventory is on hold. |
| `serialized` | Boolean indicating whether inventory is serialized |
| `availableQty` | Decimal indicating quantity of inventory available for sale in stock unit of measure. |
| `onHandQty` | Decimal indicating quantity of inventory on hand in stock unit of measure. |
| `backorderQty` | Decimal indicating quantity of inventory on backorder in stock unit of measure. |
| `committedQty` | Decimal indicating quantity of inventory committed on orders in stock unit of measure. |
| `onPurchaseQty` | Decimal indicating quantity of inventory on issued purchase orders. |
| `currentCost` | Decimal indicating current cost of inventory (used as default cost on new purchase order). |
| `averageCost` | Decimal indicating average cost of inventory (usually this is the cost used in accounting operations, depending on the company's inventory costing method setting). |
| `standardCost` | Decimal indicating the standard cost of inventory. |
| `groupNo` | String indicating the inventory group. |
| `salesDept` | Integer referencing the associated sales department. |
| `userDef1` | Inventory's user-defined string value |
| `userDef2` | Inventory's user-defined decimal value |
| `foregroundColor` | Base 10 integer indicating a custom RGBA text color. |
| `backgroundColor` | Base 10 integer indicating a custom RGBA background color. |
| `discountable` | Boolean indicating whether to apply price discounts. |
| `weight` | Decimal indicating weight of inventory |
| `packSize` | Decimal indicating pack size of inventory |
| `unitOfMeasures` | Object describing inventory unit of measures |
| `buyMeasureCode` | String indicating inventory's purchasing unit of measure |
| `stockMeasureCode` | String indicating inventory's stock unit of measure |
| `sellMeasureCode` | String indicating inventory's sales unit of measure |
| `allowBackorders` | Boolean indicating whether to allow this inventory to be backordered. |
| `allowReturns` | Boolean indicating whether to allow this inventory to be returned. |
| `dutyPct` | Decimal indicating the default duty percentage to apply during purchase receipts. |
| `freightPct` | Decimal indicating the default freight percentage to apply during purchase receipts. |
| `manufactureCountry` | String indicating country where inventory was manufactured. |
| `harmonizedCode` | String indicating inventory harmonized code. |
| `extendedDescription` | Long description of inventory |
| `defaultExpiryDate` | Date indicating the default expiry date of this inventory |
| `upload` | Boolean indicating whether or not this inventory should be uploaded to a web store or third-party integration. |
| `lastModified` | UTC time the inventory was last modified including modifications made by the system that would not otherwise be captured by the `modified` field. This field should be used for updating any external caches. |
| `created` | UTC timestamp indicating the time the inventory was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the inventory was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this inventory. |

# Price Matrix

A `PriceMatrix` model instance has the following properties:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the price matrix record or `null` if this is a new record |
| `startDate` | Date indicating when this price rule begins |
| `endDate` | Date indicating when this price rule ends |
| `customerNo` | String indicating customer criteria |
| `whse` | Warehouse criteria |
| `partNo` | Inventory part no criteria |
| `amountType` | Method price rule uses to apply changes: `P` use specied price, `D` use specified discount, `M` use specified margin amount |
| `productCode` | String indicating inventory group |
| `minimumQty` | Decimal indicating the minimum quantity of inventory that must be ordered in order for this rule to apply |
| `promoCode` | String indicating a specific promotion code to associate with this price rule |
| `amount` | Decimal amount used when price rule is based on a specified amount |
| `margin` | Decimal margin used when price rule is based on margin |
| `vendorNo` | String indicating vendor criteria |
| `created` | UTC timestamp indicating the time the price rule was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the price rule was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this price rule. |

# Serial Number

A `SerialNumber` model instance has the following properties:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the serial number or `null` if this is a new serial number |
| `serialNumber` | Serial number string |
| `whse` | Warehouse string |
| `partNo` | Part no string |
| `committedQty` | Decimal indicating number of this serial committed (should not be more than one for serial number, but can be for lot numbers) |
| `unitCost` | Decimal indicating the unit cost for this serial in stock unit of measure |
| `sellPrice` | Decimal indicating the serialized sell price for this serial |
| `expiryDate` | Date indicating best before for this serial |
