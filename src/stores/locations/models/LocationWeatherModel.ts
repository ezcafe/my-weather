import { BaseModel } from 'sjs-base-model';
import LocationConsolidatedWeatherModel from './LocationConsolidatedWeatherModel';

/*
    // Returned Api Data Sample
    consolidated_weather: [
        {
            id: 5992755487571968,
            weather_state_name: 'Heavy Cloud',
            weather_state_abbr: 'hc',
            wind_direction_compass: 'W',
            created: '2021-02-04T00:20:16.690217Z',
            applicable_date: '2021-02-03',
            min_temp: 7.85,
            max_temp: 12.285,
            the_temp: 11.89,
            wind_speed: 5.771645385429095,
            wind_direction: 273.3091537431912,
            air_pressure: 1024.5,
            humidity: 70,
            visibility: 12.603893263342082,
            predictability: 71,
        },
    ],
    time: '2021-02-03T19:15:52.145308-08:00',
    sun_rise: '2021-02-03T07:11:31.569085-08:00',
    sun_set: '2021-02-03T17:34:53.576849-08:00',
    timezone_name: 'LMT',
    parent: {
        title: 'California',
        location_type: 'Region / State / Province',
        woeid: 2347563,
        latt_long: '37.271881,-119.270233',
    },
    sources: [
        {
            title: 'BBC',
            slug: 'bbc',
            url: 'http://www.bbc.co.uk/weather/',
            crawl_rate: 360,
        },
    ],
    title: 'San Francisco',
    location_type: 'City',
    woeid: 2487956,
    latt_long: '37.777119, -122.41964',
    timezone: 'US/Pacific',
 */

export default class LocationWeatherModel extends BaseModel {
    public readonly consolidated_weather: LocationConsolidatedWeatherModel[] = [];

    /*
     * Client-Side properties (Not from API)
     */
    // public noneApiProperties: unknown = null;

    constructor(data: Partial<LocationWeatherModel>) {
        super();

        this.update(data);
    }
}
