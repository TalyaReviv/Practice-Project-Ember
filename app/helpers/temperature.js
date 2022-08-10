import { helper } from '@ember/component/helper';

export function temperature(params /*, named*/) {
  const min = Math.floor(((params[0] - 32) * 5) / 9);
  const max = Math.floor(((params[1] - 32) * 5) / 9);
  return ` ${min}° - ${max}°`;
}
export default helper(temperature);
