import { helper } from '@ember/component/helper';

export default helper(function formatDate(params /*, named*/) {
  var date = new Date(params[0] * 1000);
    const winthoutTime = date.toLocaleDateString().split(',');
    return winthoutTime;
});
