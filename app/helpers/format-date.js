import { helper } from '@ember/component/helper';
// import moment from 'moment';


export function formatDate(params /*, named*/) {
  if(params[0]) {
  var date = new Date(params[0] * 1000);
  var newFormatDate = date.toLocaleDateString().split(',');
  }
  else
  var newFormatDate='';
  // newFormatDate=moment(date).format('DD/MM/YYYY');
  return newFormatDate;
}

export default helper(formatDate);
