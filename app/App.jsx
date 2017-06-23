import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

import Home from './pages/Home.jsx';
import Second from './pages/Second.jsx';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const historyMiddleware = routerMiddleware(history);

// Create Redux Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware, historyMiddleware))
);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path='/' component={Home} />
                        <Route path='/second' component={Second} />
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}
