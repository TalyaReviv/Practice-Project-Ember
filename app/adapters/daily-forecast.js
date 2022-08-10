// import JSONAPIAdapter from '@ember-data/adapter/json-api';

import DS from 'ember-data';
import ENV from '../config/environment';

export default class DailyForecastAdapter extends DS.RESTAdapter {
  host = '//dataservice.accuweather.com';
  namespace = 'forecasts/v1/daily/5day';

  query(store, type, query) {
    let city_id = query;
    if (city_id === undefined) {
      city_id = '213225';
    }

    return this.ajax(this.buildURL(city_id), 'GET', {
      data: {
        apikey: encodeURIComponent(ENV.APIKEY),
        // q: query,
      },
    });
  }

  pathForType(type) {
    return type;
  }
}
