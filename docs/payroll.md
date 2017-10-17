# Payroll

## Timecard

A `Timecard` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the timecard |
| `payDate` | Timecard date |
| `employeeNo` | String indicating the user-facing key of the associated employee |
| `chequeNo` | Cheque number for this timecard |
| `taxableEarnings` | Decimal indicating taxable earnings for this timecard |
| `insurableEarnings` | Decimal indicating insurable earnings for this timecard |
| `pensionableEarnings` | Decimal indicating pensionable earnings for this timecard |
| `federalTax` | Decimal indicating tax payable to the CRA for this timecard |
| `cpp` | Decimal indicating CPP contribution for this timecard |
| `ei ` | Decimal indicating EI contribution for this timecard |
| `rspContribution` | Decimal indicating employee's RSP contribution for this timecard |
| `unionDues` | Decimal indicating union dues collected from this timecard |
| `grossPay` | Decimal indicating gross pay for this timecard |
| `vacationPaid` | Decimal indicating vacation paid out on this timecard |
| `otherBenefits` | Decimal indicating the amount of other benefits included on this timecard |
| `otherDeductions` | Decimal indicating the amount of other deductions included on this timecard |
| `netPay` | Decimal indicating the net pay amount for this timecard |
| `employee` | [`Employee`](employee.md) model instance associated with this timecard |
| `benefits` | Collection of [`Benefit`](#benefit) objects associated with this timecard |
| `deductions` | Collection of [`Deduction`](#deduction) objects associated with this timecard |
| `entries` | Collection of [`TimecardEntry`](#timecard-entry) objects associated with this timecard |

## Benefit

A `Benefit` object has the following attributes:

|   | Returns |
| --- | --- |
| `idx` | Integer index of this benefit |
| `name` | String describing benefit |
| `incomeTaxApplies` | Boolean indicating if this benefit is to be included in taxable earnings |
| `eiApplies` | Boolean indicating if this benefit is to be included in insurable earnings |
| `cppApplies` | Boolean indicating if this benefit is to be included in pensionable earnings |
| `wcbApplies` | Boolean indicating if this benefit is to be included in WCB earnings calculations |
| `amount` | Decimal indicating value of benefit |

## Deduction

A `Deduction` object has the following attributes:

|   | Returns |
| --- | --- |
| `idx` | Integer index of this deduction |
| `name` | String describing deduction |
| `incomeTaxApplies` | Boolean indicating if this deduction is to be subtracted from taxable earnings |
| `eiApplies` | Boolean indicating if this deduction is to be subtracted from insurable earnings |
| `cppApplies` | Boolean indicating if this deduction is to be subtracted from pensionable earnings |
| `wcbApplies` | Boolean indicating if this deduction is to be subtracted from WCB earnings calculations |
| `amount` | Decimal indicating value of deduction |

## Timecard Entry

A `TimecardEntry` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of this timecard entry or `null` if entry is new |
| `timecardId` | Integer foreign key of associated timecard record |
| `sequence` | Integer indicating order that the timecard entry was added to the collection |
| `code` | String indicating type of entry: `$` salary, `R` regular pay, `O` overtime, `C` commission, `V` vacation, `A` advance, `S` sick pay, `P` premium, `X` other |
| `description` | String describing timecard entry |
| `hours` | Decimal indicating number of hours worked |
| `rate` | Decimal indicating rate of pay per hour |
| `amount` | Decimal indicating total pay for this entry |
| `account` | String indicating GL account to attribute pay expense |
