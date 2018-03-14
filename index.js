// index.ios.js

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/app/store/configureStore';
import App from './src/app/App';

const store = configureStore();

const BoilerPlate = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('BoilerPlate', () => BoilerPlate);
