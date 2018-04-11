// @flow

import { INPUT_LAP } from '../actions/actionConstants';

const initialState = {
  laps: '1',
};

type TypeState = {
  laps: string,
};

type TypeAction = {
  type: string,
  payload: {
    laps: string,
  },
};

const inputReducer = (state: TypeState = initialState, action: TypeAction) => {
  switch (action.type) {
    case INPUT_LAP:
      return {
        ...state,
        laps: action.payload.laps,
      };
    default:
      return state;
  }
};

export default inputReducer;
