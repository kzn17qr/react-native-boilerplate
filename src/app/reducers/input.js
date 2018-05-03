// @flow

import {
  INPUT_LAP,
  INPUT_DRIVER,
  INPUT_ROUND,
} from '../actions/actionConstants';

const initialState = {
  laps: 1,
  round: 1,
  driverId: '',
};

type TypeState = {
  laps: number,
  round: number,
  driverId: string,
};

type TypeAction = {
  type: string,
  payload: {
    laps: number,
    round: number,
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
    case INPUT_ROUND:
      // console.log(action.payload.round);
      return {
        ...state,
        round: action.payload.round,
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
