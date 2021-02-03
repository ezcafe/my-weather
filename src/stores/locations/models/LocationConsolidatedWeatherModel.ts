import { BaseModel } from 'sjs-base-model';

/*
    // Returned Api Data Sample
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
 */

export default class LocationConsolidatedWeatherModel extends BaseModel {
    public readonly id: number = 0;
    public readonly applicable_date: string = '';
    public readonly min_temp: number = 0;
    public readonly max_temp: number = 0;

    /*
     * Client-Side properties (Not from API)
     */
    // public noneApiProperties: unknown = null;

    constructor(data: Partial<LocationConsolidatedWeatherModel>) {
        super();

        this.update(data);
    }
}
