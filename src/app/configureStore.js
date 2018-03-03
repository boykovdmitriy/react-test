import {applyMiddleware, createStore, compose, combineReducers} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';

import rootEpic from 'epics';
import rootReducer from 'reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);
const reducer = combineReducers({...rootReducer});

const logger = createLogger({
    collapsed: true,
});

export const configStore = (initialState = {}) => {
    const createStoreWithMiddleware = compose(
        applyMiddleware(thunk, epicMiddleware, logger),
    )(createStore);

    return createStoreWithMiddleware(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
};