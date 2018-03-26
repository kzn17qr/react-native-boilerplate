// @flow

import { BADGE_COUNT } from '../actions/actionConstants';

const initialState = {
  count: 0,
};

type TypeState = {
  count: number,
};

type TypeAction = {
  type: string,
  payload: {
    count: number,
  },
};

const badgeCountReducer = (
  state: TypeState = initialState,
  action: TypeAction,
) => {
  switch (action.type) {
    case BADGE_COUNT:
      console.log('badgeCount action', action, state);
      return { ...state, count: state.count + action.payload.count };
    default:
      return state;
  }
};

export default badgeCountReducer;
