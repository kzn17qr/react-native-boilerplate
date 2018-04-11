// @flow

import { combineReducers } from 'redux';

import routes from './routes';
import badgeCount from './badgeCount';
import search from './search';
import input from './input';

const rootReducer = combineReducers({
  nav: routes,
  badgeCount,
  search,
  input,
});

export default rootReducer;
