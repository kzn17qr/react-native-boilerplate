// @flow

import { combineReducers } from 'redux';

import routes from './routes';

const rootReducer = combineReducers({
  nav: routes,
});

export default rootReducer;
