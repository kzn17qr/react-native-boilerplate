// @flow

import React from 'react';
import {
  addNavigationHelpers,
  StackNavigator,
  NavigationScreenProp,
  NavigationRoute,
} from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../components/HomeScreen';
import EditScreen from '../components/EditScreen';
import { addListener } from '../utils/redux';

export const RootStack = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Edit: {
      screen: EditScreen,
    },
  },
  {
    initialRouteName: 'Home',
    initialRouteParams: {
      title: 'Home',
    },
  },
);

type TypeProps = {
  dispatch: Function,
  nav: NavigationScreenProp<NavigationRoute>,
};

const AppWithNavigationState = ({ dispatch, nav }: TypeProps) => (
  <RootStack
    navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
  />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export default AppNavigator;
