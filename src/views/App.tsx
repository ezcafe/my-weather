import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoadingIndicator from './components/loading-indicator/LoadingIndicator';
import RouteEnum from '../constants/RouteEnum';

import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = lazy(() => import('./home-page/HomePage'));
const NotFoundPage = lazy(() => import('./not-found-page/NotFoundPage'));

export default function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingIndicator />}>
                <Switch>
                    <Route
                        exact={true}
                        path={RouteEnum.Home}
                        component={HomePage}
                    />
                    <Route component={NotFoundPage} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}
