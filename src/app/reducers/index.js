// @flow

import { combineReducers } from 'redux';

import routes from './routes';
import badgeCount from './badgeCount';
import search from './search';
import input from './input';
import init from './init';

const rootReducer = combineReducers({
  init,
  nav: routes,
  badgeCount,
  search,
  input,
});

export default rootReducer;
