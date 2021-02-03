import ILocationsState from './models/ILocationsState';
import * as LocationsAction from './LocationsAction';
import IAction from '../../models/IAction';
import LocationModel from './models/LocationModel';
import LocationWeatherModel from './models/LocationWeatherModel';
import baseReducer from '../../utilities/BaseReducer';
import { Reducer } from 'redux';

export const initialState: ILocationsState = {
    items: [],
    weather: undefined,
};

const locationsReducer: Reducer = baseReducer(initialState, {
    [LocationsAction.REQUEST_LOCATIONS](
        state: ILocationsState,
        action: IAction<string>
    ): ILocationsState {
        return {
            ...state,
            items: [], // reset items and show loading icon in search form
        };
    },
    [LocationsAction.REQUEST_LOCATIONS_FINISHED](
        state: ILocationsState,
        action: IAction<LocationModel[]>
    ): ILocationsState {
        return {
            ...state,
            items: action.payload!,
        };
    },
    [LocationsAction.REQUEST_LOCATION_WEATHER_FINISHED](
        state: ILocationsState,
        action: IAction<LocationWeatherModel>
    ): ILocationsState {
        return {
            ...state,
            weather: action.payload!,
        };
    },
});

export default locationsReducer;
