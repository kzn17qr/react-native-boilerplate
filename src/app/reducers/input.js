// @flow

import { INPUT_LAP, INPUT_DRIVER } from '../actions/actionConstants';

const initialState = {
  laps: 1,
  driverId: '',
};

type TypeState = {
  laps: number,
  driverId: string,
};

type TypeAction = {
  type: string,
  payload: {
    laps: number,
    driverId: string,
  },
};

const inputReducer = (state: TypeState = initialState, action: TypeAction) => {
  switch (action.type) {
    case INPUT_LAP:
      // console.log(action.payload.laps);
      return {
        ...state,
        laps: action.payload.laps,
      };
    case INPUT_DRIVER:
      // console.log(action.payload.driverId);
      return {
        ...state,
        driverId: action.payload.driverId,
      };
    default:
      return state;
  }
};

export default inputReducer;
