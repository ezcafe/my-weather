import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dispatch } from 'redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';

import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import Toasts from './components/toasts/Toasts';
import RouteEnum from '../constants/RouteEnum';
import IAction from '../models/IAction';

import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() => import('./home-page/HomePage'));
const NotFoundPage = lazy(() => import('./not-found-page/NotFoundPage'));

interface IProps {
    readonly history: History;
    readonly dispatch: Dispatch<IAction<any>>;
}

const App: React.FC<IProps> = (props) => {
    return (
        <ConnectedRouter history={props.history}>
            <Suspense fallback={<LoadingIndicator />}>
                <Switch>
                    <Route
                        exact={true}
                        path={RouteEnum.Home}
                        component={HomePage}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
                <Toasts />
            </Suspense>
        </ConnectedRouter>
    );
};

export default App;
