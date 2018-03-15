// src/app/App.js

import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import EditScreen from './components/EditScreen';

const RootStack = StackNavigator(
  {
    Home: { screen: HomeScreen },
    Edit: { screen: EditScreen },
  },
  {
    initialRouteName: 'Home',
  },
);

const App = () => <RootStack />;

export default App;
