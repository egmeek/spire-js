# GL

## [GL Acccount](#gl-account)

A `GLAccount` object has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Integer primary key of the GL account |
| `division` | String indicating GL division of this account (user-facing key fragment) |
| `accountNo` | String indicating this account's user-facing key (user-facing key fragment)  |
| `currency` | String indicating currency of this account. Empty string for accounts in base currency (user-facing key fragment)  |
| `name` | Returns the name of the GL account |
| `groupNo` | String indicating which group this account belongs to |
| `group` | Object describing associated GL group |
| `accountType` | String indicating account type: `A` indicates an asset account, `L` indicates a liability account, `R` indicates a revenue account, `X` indicates an expense account |
| `debitBalance` | Decimal debit balance or zero if this account has a credit balance |
| `creditBalance` | Decimal credit balance or zero if this account has a debit balance |
| `foreignDebitBalance` | Decimal debit balance in foreign currency or zero if this account has a foreign credit balance or is not a foreign account |
| `foreignCreditBalance` | Decimal credit balance in foreign currency or zero if this account has a foreign debit balance or is not a foreign account |
| `allocation` | Boolean indicating if this account is an allocation account |
| `segments` | Object describing segment structure of this account if GL chart is segmented |
