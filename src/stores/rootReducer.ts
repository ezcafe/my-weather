import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import IStore from '../models/IStore';
import ErrorReducer from './error/ErrorReducer';
import locationsReducer from './locations/LocationsReducer';
import RequestingReducer from './requesting/RequestingReducer';
import toastsReducer from './toasts/ToastsReducer';

export default function rootReducer(history: History): Reducer<IStore> {
    const reducerMap: ReducersMapObject<IStore> = {
        error: ErrorReducer,
        requesting: RequestingReducer,
        router: connectRouter(history) as any,
        locations: locationsReducer,
        toasts: toastsReducer,
    };

    return combineReducers(reducerMap);
}
