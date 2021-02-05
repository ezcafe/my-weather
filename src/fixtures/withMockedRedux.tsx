import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';
import { createMemoryHistory, History } from 'history';
import IStore from '../models/IStore';
import rootStore from '../stores/rootStore';

const withRedux = <P extends object>(
    Component: React.ComponentType<P>,
    initialState: Partial<IStore> = {}
) =>
    class HOC extends React.Component<P> {
        store: Store<IStore>;

        constructor(props: P) {
            super(props);
            const history: History = createMemoryHistory();
            this.store = rootStore(initialState, history);
        }

        render() {
            return (
                <Provider store={this.store}>
                    <Component {...(this.props as P)} />
                </Provider>
            );
        }
    };

export default withRedux;
