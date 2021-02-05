import HttpErrorResponseModel from '../models/HttpErrorResponseModel';
import * as ApiUtility from '../utilities/ApiUtility';
import LocationModel from '../stores/locations/models/LocationModel';
import LocationWeatherModel from '../stores/locations/models/LocationWeatherModel';

export async function fetchLocations(
    location: string
): Promise<LocationModel[] | HttpErrorResponseModel> {
    const endpoint: string = '/api/location/search/';
    return ApiUtility.getToModel<LocationModel[]>(LocationModel, endpoint, {
        query: location,
    });
}

export async function fetchLocationWeather(
    woeid: string
): Promise<LocationWeatherModel | HttpErrorResponseModel> {
    const endpoint: string = `/api/location/${woeid}/`;
    return ApiUtility.getToModel<LocationWeatherModel>(
        LocationWeatherModel,
        endpoint
    );
}
