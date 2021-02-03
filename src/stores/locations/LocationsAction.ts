import LocationModel from './models/LocationModel';
import LocationWeatherModel from './models/LocationWeatherModel';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import IAction from '../../models/IAction';
import * as ActionUtility from '../../utilities/ActionUtility';

export const REQUEST_LOCATIONS: string = 'LocationsAction.REQUEST_LOCATIONS';
export const REQUEST_LOCATIONS_FINISHED: string =
    'LocationsAction.REQUEST_LOCATIONS_FINISHED';

export const REQUEST_LOCATION_WEATHER: string =
    'LocationsAction.REQUEST_LOCATION_WEATHER';
export const REQUEST_LOCATION_WEATHER_FINISHED: string =
    'LocationsAction.REQUEST_LOCATION_WEATHER_FINISHED';

export function requestLocationsAction(location: string): IAction<string> {
    return ActionUtility.createAction(REQUEST_LOCATIONS, location);
}

export function requestLocationsFinishedAction(
    model: LocationModel[] | HttpErrorResponseModel
): IAction<LocationModel[] | HttpErrorResponseModel> {
    const isError: boolean = model instanceof HttpErrorResponseModel;
    return ActionUtility.createAction(
        REQUEST_LOCATIONS_FINISHED,
        model,
        isError
    );
}

export function requestLocationWeatherAction(woeid: string): IAction<string> {
    return ActionUtility.createAction(REQUEST_LOCATION_WEATHER, woeid);
}

export function requestLocationWeatherFinishedAction(
    model: LocationWeatherModel | HttpErrorResponseModel
): IAction<LocationWeatherModel | HttpErrorResponseModel> {
    const isError: boolean = model instanceof HttpErrorResponseModel;
    return ActionUtility.createAction(
        REQUEST_LOCATION_WEATHER_FINISHED,
        model,
        isError
    );
}
