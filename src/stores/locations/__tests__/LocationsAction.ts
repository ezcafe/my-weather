import * as LocationsAction from '../LocationsAction';
import LocationModel from '../models/LocationModel';
import LocationWeatherModel from '../models/LocationWeatherModel';
import { mockedLocation, mockedLocationWeather } from '../../../fixtures';
import HttpErrorResponseModel from '../../../models/HttpErrorResponseModel';
import IAction from '../../../models/IAction';
import * as ActionUtility from '../../../utilities/ActionUtility';

describe('LocationsAction', () => {
    describe('requestLocationsAction', () => {
        it('should call action with payload', () => {
            const actualResult: IAction<string> = LocationsAction.requestLocationsAction(
                'san'
            );
            const expectedResult: IAction<string> = ActionUtility.createAction(
                LocationsAction.REQUEST_LOCATIONS,
                'san'
            );

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('requestLocationsFinishedAction', () => {
        it.each([
            ['success', [mockedLocation], false],
            ['error', new HttpErrorResponseModel(), true],
        ])(
            'should call action with %s payload',
            (
                _desc: string,
                model: LocationModel[] | HttpErrorResponseModel,
                isError: boolean
            ) => {
                const actualResult: IAction<
                    LocationModel[] | HttpErrorResponseModel
                > = LocationsAction.requestLocationsFinishedAction(model);
                const expectedResult: IAction<
                    LocationModel[] | HttpErrorResponseModel
                > = ActionUtility.createAction(
                    LocationsAction.REQUEST_LOCATIONS_FINISHED,
                    model,
                    isError
                );

                expect(actualResult).toEqual(expectedResult);
            }
        );
    });

    describe('requestLocationWeatherAction', () => {
        it('should call action with payload', () => {
            const actualResult: IAction<string> = LocationsAction.requestLocationWeatherAction(
                '12345'
            );
            const expectedResult: IAction<string> = ActionUtility.createAction(
                LocationsAction.REQUEST_LOCATION_WEATHER,
                '12345'
            );

            expect(actualResult).toEqual(expectedResult);
        });
    });

    describe('requestLocationWeatherFinishedAction', () => {
        it.each([
            ['success', mockedLocationWeather, false],
            ['error', new HttpErrorResponseModel(), true],
        ])(
            'should call action with %s payload',
            (
                _desc: string,
                model: LocationWeatherModel | HttpErrorResponseModel,
                isError: boolean
            ) => {
                const actualResult: IAction<
                    LocationWeatherModel | HttpErrorResponseModel
                > = LocationsAction.requestLocationWeatherFinishedAction(model);
                const expectedResult: IAction<
                    LocationWeatherModel | HttpErrorResponseModel
                > = ActionUtility.createAction(
                    LocationsAction.REQUEST_LOCATION_WEATHER_FINISHED,
                    model,
                    isError
                );

                expect(actualResult).toEqual(expectedResult);
            }
        );
    });
});
