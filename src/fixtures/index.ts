import ToastStatusEnum from '../constants/ToastStatusEnum';
import LocationModel from '../stores/locations/models/LocationModel';
import LocationWeatherModel from '../stores/locations/models/LocationWeatherModel';
import LocationConsolidatedWeatherModel from '../stores/locations/models/LocationConsolidatedWeatherModel';
import IToast from '../stores/toasts/models/IToast';

export const mockedLocationData = {
    title: 'San Francisco',
    location_type: 'City',
    woeid: 2487956,
    latt_long: '37.777119, -122.41964',
};

export const mockedLocation: LocationModel = new LocationModel(
    mockedLocationData
);

export const mockedLocationConsolidatedWeather: LocationConsolidatedWeatherModel = new LocationConsolidatedWeatherModel(
    {
        id: 5,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        applicable_date: '2021-02-03',
        min_temp: 7.85,
        max_temp: 12.285,
    }
);

export const mockedLocationWeather: LocationWeatherModel = new LocationWeatherModel(
    {
        consolidated_weather: [mockedLocationConsolidatedWeather],
    }
);

export const mockedLocations = {
    items: [mockedLocation],
    weather: mockedLocationWeather,
};

export const mockedToast: IToast = {
    type: ToastStatusEnum.Error,
    message: 'Error message',
    id: 'error-1',
};

export const mockedToasts = {
    items: [mockedToast],
};

export default {
    locations: mockedLocations,
    toasts: mockedToasts,
};
