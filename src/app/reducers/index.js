// @flow

import { combineReducers } from 'redux';

import routes from './routes';
import badgeCount from './badgeCount';
import search from './search';

const rootReducer = combineReducers({
  nav: routes,
  badgeCount,
  search,
});

export default rootReducer;
