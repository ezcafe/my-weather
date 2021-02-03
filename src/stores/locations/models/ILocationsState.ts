import LocationModel from './LocationModel';
import LocationWeatherModel from './LocationWeatherModel';

export default interface ILocationsState {
    readonly items: LocationModel[];
    readonly weather: LocationWeatherModel | undefined;
}
