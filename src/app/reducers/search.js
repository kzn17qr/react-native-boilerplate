// @flow

import { SEARCH, LOADING } from '../actions/actionConstants';
import ApiService from '../model/apiService';
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
    data: ApiService,
    input: Object,
    isLoading: boolean,
    isFetched: boolean,
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
          isFetched: action.payload.isFetched,
        }
        : {
          ...state,
          data: action.payload.data,
          isLoading: action.payload.isLoading,
          isFetched: action.payload.isFetched,
        };
    case LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
};

export default searchReducer;
