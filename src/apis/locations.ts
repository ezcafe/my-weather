import HttpErrorResponseModel from '../models/HttpErrorResponseModel';
import * as EffectUtility from '../utilities/ApiUtility';
import LocationModel from '../stores/locations/models/LocationModel';
import LocationWeatherModel from '../stores/locations/models/LocationWeatherModel';

export async function fetchLocations(
    location: string
): Promise<LocationModel[] | HttpErrorResponseModel> {
    const endpoint: string = '/api/location/search/';
    return EffectUtility.getToModel<LocationModel[]>(LocationModel, endpoint, {
        query: location,
    });
}

export async function fetchLocationWeather(
    woeid: string
): Promise<LocationWeatherModel | HttpErrorResponseModel> {
    const endpoint: string = `/api/location/${woeid}/`;
    return EffectUtility.getToModel<LocationWeatherModel>(
        LocationWeatherModel,
        endpoint
    );
}
