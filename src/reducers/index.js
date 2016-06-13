import { combineReducers } from 'redux';
import {routerReducer } from 'react-router-redux';

import charts from './charts';

//combine the reducers

const rootReducer = combineReducers({charts, routing: routerReducer});

export default rootReducer;