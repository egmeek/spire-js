# Employee

An `Employee` model instance has the following attributes:

|   | Returns |
| --- | --- |
| `id` | Returns the primary key of the employee or `null` if this is a new employee. |
| `employeeNo` | Returns the user-facing key of the employee. (indexed field) |
| `name` | Returns the name of the employee. |
| `status` | Employee status: `A` indicates an active employee, `T` indicates a terminated employee, and `L` is an employee on leave. |
| `address` | Returns [`Address`](address.md) object. |
| `jobTitle` | Employee's title |
| `reviewDate` | Indicates employee's last performance review date. |
| `birthDate` | Employee's birthday. |
| `departmentCode` | Payroll department code. |
| `termDate` | Termination date, if employee status is terminated, otherwise `null`. |
| `hireDate` | Date employee was hired. |
| `created` | UTC timestamp indicating the time the employee was created. |
| `createdBy` | String indicating the initials of the user that created this
| `modified` | UTC timestamp indicating the time the employee was last modified. |
| `modifiedBy` | String indicating the initials of the user that last modified this employee. |
