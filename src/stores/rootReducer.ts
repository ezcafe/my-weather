import { combineReducers, Reducer, ReducersMapObject } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import IStore from '../models/IStore';
import errorReducer from './error/ErrorReducer';
import locationsReducer from './locations/LocationsReducer';
import requestingReducer from './requesting/RequestingReducer';
import toastsReducer from './toasts/ToastsReducer';

const rootReducer = (history: History): Reducer<IStore> => {
    const reducerMap: ReducersMapObject<IStore> = {
        error: errorReducer,
        locations: locationsReducer,
        requesting: requestingReducer,
        router: connectRouter(history) as any,
        toasts: toastsReducer,
    };

    return combineReducers(reducerMap);
};

export default rootReducer;
