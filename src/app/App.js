// @flow

import React from 'react';
import { Root } from 'native-base';
import { Provider } from 'react-redux';

import AppNavigator from './navigators/AppNavigator';
import configureStore from './store/configureStore';

const store = configureStore();

const BoilerPlate = () => (
  <Provider store={store}>
    <Root>
      <AppNavigator />
    </Root>
  </Provider>
);

export default BoilerPlate;
