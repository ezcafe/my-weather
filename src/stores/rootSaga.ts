import { all } from 'redux-saga/effects';
import locationsEffectWatcher from './locations/LocationsEffect';

export default function* rootSaga() {
    yield all([locationsEffectWatcher()]);
}
