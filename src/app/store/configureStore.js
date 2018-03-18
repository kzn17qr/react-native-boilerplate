// @flow

import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from '../reducers';
import { navReduxMiddleware } from '../utils/redux';

const configureStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(promiseMiddleware, navReduxMiddleware),
  );
  return store;
};

export default configureStore;
