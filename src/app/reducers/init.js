// @flow

import { GET_SCHEDULE } from '../actions/actionConstants';
import { ScheduleEntity } from '../model/apiService';

const initialState = {
  data: {},
};

type TypeState = {
  data: Object,
};

type TypeAction = {
  type: string,
  payload: {
    data: ScheduleEntity,
  },
};

const initReducer = (state: TypeState = initialState, action: TypeAction) => {
  switch (action.type) {
    case GET_SCHEDULE:
      // console.log(action.payload.data.Races);
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};

export default initReducer;
