import { helper } from '@ember/component/helper';
// import moment from 'moment';


export function formatDate(params /*, named*/) {
  var date = new Date(params[0] * 1000);
  var newFormatDate = date.toLocaleDateString().split(',');
  // newFormatDate=moment(date).format('DD/MM/YYYY');
  return newFormatDate;
}

export default helper(formatDate);
