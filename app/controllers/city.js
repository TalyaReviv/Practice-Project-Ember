import Controller from '@ember/controller';
import EmberResolver from 'ember-resolver';
import jQuery from 'jquery';

export default class CityController extends Controller {
  getDailyForecast() {
    //why this id?
    const cityName = jQuery('#form-city input').val();
    // console.log(cityName);
    let url = window.location.href;
    // console.log(url.indexOf('city'));
    if (url.indexOf('city') > 0) {
      url = url.substring(0, url.indexOf('/city') + 5);
    }

    url = url + '/' + cityName;
    window.location.href = url;
    // url=window.location.href;
    // console.log('2'+url+'/'+cityName);

    // console.log('getDailyForecast');
  }
}
