// @flow

// import { ActionConst } from 'react-native-router-flux';
// import { NavigationActions } from 'react-navigation';
import { NavigationRouter, State, Action } from 'react-navigation';
import { RootStack } from '../navigators/AppNavigator';

const navRouter = RootStack.router;
const initialState = navRouter.getStateForAction(navRouter.getActionForPathAndParams('Home'));

const routeReducer = (
  state: NavigationRouter<State> = initialState,
  action: NavigationRouter<Action>,
) => {
  const nextState = navRouter.getStateForAction(action, state);
  return nextState || state;
};

export default routeReducer;
