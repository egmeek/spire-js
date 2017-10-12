'use strict';

var Big = require('big.js');


var Decimal = Big;
Decimal.prototype.prec = 2;
Decimal.prototype.format = function() {
  return this.toFixed(this.prec).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};


module.exports = {
  Decimal: Decimal
};
