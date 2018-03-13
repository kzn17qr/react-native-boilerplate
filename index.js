// index.ios.js

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './app/store/configureStore';
import App from './app/App';

const store = configureStore();

const BoilerPlate = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('BoilerPlate', () => BoilerPlate);
