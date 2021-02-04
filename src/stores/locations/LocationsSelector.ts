import LocationModel from './models/LocationModel';
import LocationWeatherModel from './models/LocationWeatherModel';
import IStore from '../../models/IStore';

export function locationsSelector(state: IStore): LocationModel[] {
    return state.locations.items;
}

export function locationWeatherSelector(
    state: IStore
): LocationWeatherModel | undefined {
    return state.locations.weather;
}
