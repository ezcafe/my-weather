import LocationModel from './models/LocationModel';
import LocationWeatherModel from './models/LocationWeatherModel';
import IStore from '../../models/IStore';
import { REQUEST_LOCATIONS, REQUEST_LOCATION_WEATHER } from './LocationsAction';

export function locationsSelector(state: IStore): LocationModel[] {
    return state.locations.items;
}

export function isLoadingLocationsSelector(state: IStore): boolean {
    return state.requesting[REQUEST_LOCATIONS];
}

export function locationWeatherSelector(
    state: IStore
): LocationWeatherModel | undefined {
    return state.locations.weather;
}

export function isLoadingLocationWeatherSelector(state: IStore): boolean {
    return state.requesting[REQUEST_LOCATION_WEATHER];
}
