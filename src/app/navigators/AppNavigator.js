// @flow

import React from 'react';
import PropTypes from 'prop-types';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
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

const AppWithNavigationState = ({ dispatch, nav }) => (
  <RootStack
    navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}
  />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export default AppNavigator;
