import { call, put } from 'redux-saga/effects';
import { expectSaga, RunResult } from 'redux-saga-test-plan';
import { requestLocations, requestLocationWeather } from '../LocationsEffect';
import {
    requestLocationsAction,
    requestLocationsFinishedAction,
    requestLocationWeatherAction,
    requestLocationWeatherFinishedAction,
} from '../LocationsAction';
import LocationModel from '../models/LocationModel';
import LocationWeatherModel from '../models/LocationWeatherModel';
import { fetchLocations, fetchLocationWeather } from '../../../apis/locations';
import { mockedLocation, mockedLocationWeather } from '../../../fixtures';
import HttpErrorResponseModel from '../../../models/HttpErrorResponseModel';
import IAction from '../../../models/IAction';

describe('LocationsEffect', () => {
    describe('requestLocations', () => {
        it.each([
            ['successfully', [mockedLocation]],
            ['with error', new HttpErrorResponseModel()],
        ])(
            'should request locations %s',
            async (
                _desc: string,
                model: LocationModel[] | HttpErrorResponseModel
            ) => {
                const action: IAction<string> = requestLocationsAction('san');
                const saga: RunResult = await expectSaga(
                    requestLocations,
                    action
                )
                    .provide([[call(fetchLocations, 'san'), model]])
                    .run();

                expect(saga.effects.put).toEqual([
                    put(requestLocationsFinishedAction(model)),
                ]);
            }
        );
    });

    describe('requestLocationWeather', () => {
        it.each([
            ['successfully', mockedLocationWeather],
            ['with error', new HttpErrorResponseModel()],
        ])(
            'should request location weather %s',
            async (
                _desc: string,
                model: LocationWeatherModel | HttpErrorResponseModel
            ) => {
                const woeid = '12345';
                const action: IAction<string> = requestLocationWeatherAction(
                    woeid
                );
                const saga: RunResult = await expectSaga(
                    requestLocationWeather,
                    action
                )
                    .provide([[call(fetchLocationWeather, woeid), model]])
                    .run();

                expect(saga.effects.put).toEqual([
                    put(requestLocationWeatherFinishedAction(model)),
                ]);
            }
        );
    });
});
