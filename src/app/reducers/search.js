// @flow

import { SEARCH, LOADING } from '../actions/actionConstants';
import { LapEntity } from '../model/apiService';
import { lapCalc } from '../utils/util';

const initialState = {
  data: {},
};

type TypeState = {
  data: Object,
};

type TypeAction = {
  type: string,
  payload: {
    data: LapEntity,
    input: Object,
    isLoading: boolean,
    fetchedRoundNumber: number,
  },
};

const searchReducer = (state: TypeState = initialState, action: TypeAction) => {
  switch (action.type) {
    case SEARCH:
      return action.payload.data === null
        ? {
          ...state,
          data: lapCalc(state.data, action.payload.input),
          isLoading: action.payload.isLoading,
          fetchedRoundNumber: action.payload.fetchedRoundNumber,
        }
        : {
          ...state,
          data: action.payload.data,
          isLoading: action.payload.isLoading,
          fetchedRoundNumber: action.payload.fetchedRoundNumber,
        };
    case LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
};

export default searchReducer;
