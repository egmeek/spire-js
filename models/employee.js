'use strict';

var base = require('./base');

var Address = require('./address').Address;


var Employee = base.Model.extend({
  endpoint: 'payroll/employees',
  props: {
    id: 'any',
    employeeNo: 'string',
    name: 'string',
    sinNo: 'string',
    status: {
      type: 'string',
      values: ['A', 'T', 'L']
    },
    jobTitle: 'string',
    reviewDate: 'date',
    birthDate: 'date',
    departmentCode: 'any',
    termDate: 'date',
    hireDate: 'date',
    created: 'date',
    createdBy: 'string',
    modified: 'date',
    modifiedBy: 'string'
  },

  children: {
    address: Address
  }
});


var EmployeeList = base.RESTCollection.extend({
  model: Employee,
  endpoint: 'payroll/employees/',
  indexes: ['employeeNo']
});


module.exports = {
  Employee: Employee,
  EmployeeList: EmployeeList
};
