import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { createBrowserHistory, History } from 'history';
import './index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import IStore from './models/IStore';
import rootStore from './stores/rootStore';

(async (window: Window): Promise<void> => {
    const initialState: Partial<IStore> = {};
    const history: History = createBrowserHistory();
    const store: Store<IStore> = rootStore(initialState, history);

    const rootEl: HTMLElement | null = document.getElementById('root');
    const render = (Component: typeof App, el: HTMLElement | null): void => {
        ReactDOM.render(
            <React.StrictMode>
                <Provider store={store}>
                    <Component history={history} dispatch={store.dispatch} />
                </Provider>
            </React.StrictMode>,
            el
        );
    };

    render(App, rootEl);

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
})(window);
