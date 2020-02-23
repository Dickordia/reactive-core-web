import {
    createStore as _createStore,
    applyMiddleware,
} from 'redux'

import thunk from 'redux-thunk'
import reducer, { initialState } from './reducer';

import { Login} from './actions';

const middleware = applyMiddleware(thunk)

const createStore = () => {
    return _createStore(reducer, initialState, middleware)
}

export { createStore, Login }

