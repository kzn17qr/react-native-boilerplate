// app/reducers/routes.js

import { ActionConst } from 'react-native-router-flux';

const initialState = {
  scene: {},
};

const routeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // focus action is dispatched when a new screen comes into focus
    case ActionConst.FOCUS:
      console.log(`action=${action}`);
      return {
        ...state,
        scene: action.scene,
      };

    // ...other actions

    default:
      return state;
  }
};

export default routeReducer;
