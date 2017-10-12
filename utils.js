'use strict';


function formatDate(dt) {
  return dt.getFullYear() + '-' + (dt.getMonth() + 1) + '-' + dt.getDate();
}


module.exports = {
  formatDate: formatDate
};
