import * as LocationsAction from '../LocationsAction';
import locationsReducer, { initialState } from '../LocationsReducer';
import LocationModel from '../models/LocationModel';
import LocationWeatherModel from '../models/LocationWeatherModel';
import { mockedLocation, mockedLocationWeather } from '../../../fixtures';
import IAction from '../../../models/IAction';
import * as ActionUtility from '../../../utilities/ActionUtility';

describe('LocationsReducer', () => {
    it('returns default state with invalid action type', () => {
        const action: IAction<undefined> = ActionUtility.createAction('');
        expect(locationsReducer(undefined, action)).toEqual(initialState);
    });

    describe(LocationsAction.REQUEST_LOCATIONS, () => {
        it('should reset location items state', () => {
            const state = {
                ...initialState,
                items: [...initialState.items, mockedLocation],
            };

            const action = ActionUtility.createAction(
                LocationsAction.REQUEST_LOCATIONS,
                'san'
            );

            const actualResult = locationsReducer(state, action);
            const expectedResult = {
                ...initialState,
                items: [],
            };

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe(LocationsAction.REQUEST_LOCATIONS_FINISHED, () => {
        it('should update location items state', () => {
            const locations: LocationModel[] = [mockedLocation];
            const action = ActionUtility.createAction(
                LocationsAction.REQUEST_LOCATIONS_FINISHED,
                locations
            );

            const actualResult = locationsReducer(initialState, action);
            const expectedResult = {
                ...initialState,
                items: [...initialState.items, ...locations],
            };

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe(LocationsAction.REQUEST_LOCATION_WEATHER_FINISHED, () => {
        it('should update weather state', () => {
            const weather: LocationWeatherModel = mockedLocationWeather;
            const action = ActionUtility.createAction(
                LocationsAction.REQUEST_LOCATION_WEATHER_FINISHED,
                weather
            );

            const actualResult = locationsReducer(initialState, action);
            const expectedResult = {
                ...initialState,
                weather,
            };

            expect(actualResult).toEqual(expectedResult);
        });
    });
});
