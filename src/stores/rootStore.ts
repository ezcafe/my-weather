import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import IStore from '../models/IStore';
import errorToastMiddleware from './middlewares/errorToastMiddleware';

const rootStore = (
    initialState: Partial<IStore>,
    history: History
): Store<IStore> => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware: Middleware[] = [
        sagaMiddleware,
        routerMiddleware(history),
        errorToastMiddleware(),
    ].filter(Boolean);

    const enhancer =
        process.env.NODE_ENV === 'development'
            ? composeWithDevTools(applyMiddleware(...middleware))
            : applyMiddleware(...middleware);

    const store: Store<IStore> = createStore(
        rootReducer(history),
        initialState as any,
        enhancer
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default rootStore;
