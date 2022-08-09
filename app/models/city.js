import Model, { attr, hasMany } from '@ember-data/model';

export default class CityModel extends Model {
  @attr name;
  @hasMany dailyForecasts;
}
