import {createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import {browserHistory } from 'react-router';
/**
 * This file is used to create the store, an object that holds
 * all of our data (which is living in different JS files within the
 * data folder.
 * @type {{forms: *[], charts: *[]}}
 */




/**
 * rootReducer is used to combine all of our reducer methods so that the
 * reducer methods can link up with the data (which is stored in the store)
 */
import rootReducer from './reducers/index';

import charts from './data/charts';


//create an object for the default data

const defaultState = {
    charts
};

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {

    module.hot.accept('./reducers/',() => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    });
}

export default store;