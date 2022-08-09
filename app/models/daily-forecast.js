import Model, { attr, belongsTo } from '@ember-data/model';

export default class DailyForecastModel extends Model {
  @attr date;
  @attr minTemp;
  @attr maxTemp;
  @attr iconPhrase;
  @attr iconId;
  @belongsTo city;
}
