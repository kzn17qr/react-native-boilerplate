// @flow

import { combineReducers } from 'redux';

import routes from './routes';
import badgeCount from './badgeCount';

const rootReducer = combineReducers({
  nav: routes,
  badgeCount,
});

export default rootReducer;
