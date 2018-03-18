// @flow

// import { ActionConst } from 'react-native-router-flux';
// import { NavigationActions } from 'react-navigation';
import { RootStack } from '../navigators/AppNavigator';

const navRouter = RootStack.router;
const initialState = navRouter.getStateForAction(navRouter.getActionForPathAndParams('Home'));

const routeReducer = (state = initialState, action = {}) => {
  const nextState = navRouter.getStateForAction(action, state);
  return nextState || state;
};

export default routeReducer;
