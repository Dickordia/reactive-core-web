import React from 'react';
import ReactDOM from 'react-dom';
import './components/styles/index.css';
import Login from './containers/Login';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from './core-module/store';

const store = createStore();

const ConnectedApp = () => (
    <Provider store={store}>
        <Login />
    </Provider>
);

ReactDOM.render(<ConnectedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
