import { takeLatest, call, put } from 'redux-saga/effects';
import {
    REQUEST_LOCATIONS,
    REQUEST_LOCATION_WEATHER,
    requestLocationsFinishedAction,
    requestLocationWeatherFinishedAction,
} from './LocationsAction';
import LocationModel from './models/LocationModel';
import LocationWeatherModel from './models/LocationWeatherModel';
import { fetchLocations, fetchLocationWeather } from '../../apis/locations';
import IAction from '../../models/IAction';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';

function* requestLocations(action: IAction<string>) {
    const { payload: location } = action;
    if (!location) {
        return;
    }
    const model: LocationModel[] | HttpErrorResponseModel = yield call(
        fetchLocations,
        location
    );
    yield put(requestLocationsFinishedAction(model));
}

function* requestLocationWeather(action: IAction<string>) {
    const { payload: woeid } = action;
    if (!woeid) {
        return;
    }
    const model: LocationWeatherModel | HttpErrorResponseModel = yield call(
        fetchLocationWeather,
        woeid
    );
    yield put(requestLocationWeatherFinishedAction(model));
}

export default function* locationsEffectWatcher() {
    yield takeLatest(REQUEST_LOCATIONS, requestLocations);
    yield takeLatest(REQUEST_LOCATION_WEATHER, requestLocationWeather);
}
