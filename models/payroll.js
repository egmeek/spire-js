'use strict';

var base = require('./base');
var Employee = require('./employee').Employee;


var Benefit = base.State.extend({
  props: {
    idx: 'any',
    name: 'string',
    incomeTaxApplies: 'boolean',
    eiApplies: 'boolean',
    cppApplies: 'boolean',
    wcbApplies: 'boolean',
    amount: 'decimal'
  }
});


var BenefitList = base.Collection.extend({
  model: Benefit
});


var Deduction = base.State.extend({
  props: {
    idx: 'any',
    name: 'string',
    glAccount: 'string',
    incomeTaxApplies: 'boolean',
    eiApplies: 'boolean',
    cppApplies: 'boolean',
    wcbApplies: 'boolean',
    amount: 'decimal'
  }
});


var DeductionList = base.Collection.extend({
  model: Deduction
});


var TimecardEntry = base.State.extend({
  props: {
    id: 'any',
    timecardId: 'any',
    sequence: 'any',
    code: 'string',
    description: 'string',
    hours: 'decimal',
    rate: 'decimal',
    amount: 'decimal',
    account: 'string'
  }
});


var TimecardEntryList = base.Collection.extend({
  model: TimecardEntry
});


var Timecard = base.Model.extend({
  endpoint: 'payroll/timecards',
  props: {
    id: 'any',
    payDate: 'date',
    employeeNo: 'string',
    chequeNo: 'string',
    taxableEarnings: 'decimal',
    pensionableEarnings: 'decimal',
    insurableEarnings: 'decimal',
    federalTax: 'decimal',
    cpp: 'decimal',
    ei: 'decimal',
    rspContribution: 'decimal',
    unionDues: 'decimal',
    grossPay: 'decimal',
    vacationPaid: 'decimal',
    otherBenefits: 'decimal',
    otherDeductions: 'decimal',
    netPay: 'decimal'
  },

  children: {
    employee: Employee,
    benefits: BenefitList,
    deductions: DeductionList,
    entries: TimecardEntryList
  }
});


var TimecardList = base.RESTCollection.extend({
  model: Timecard,
  endpoint: 'payroll/timecards/'
});


module.exports = {
  Timecard: Timecard,
  TimecardList: TimecardList,
  TimecardEntry: TimecardEntry
};
