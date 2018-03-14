// src/app/reducers/index.js

import { combineReducers } from 'redux';
import routes from './routes';

const rootReducer = combineReducers({
  routes,
});

export default rootReducer;
