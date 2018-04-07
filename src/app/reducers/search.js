// @flow

import { SEARCH, LOADING } from '../actions/actionConstants';
import ApiService from '../model/apiService';

const initialState = {
  data: {},
};

type TypeState = {};

type TypeAction = {
  type: string,
  payload: {
    data: ApiService,
    isLoading: boolean,
  },
};

const searchReducer = (state: TypeState = initialState, action: TypeAction) => {
  switch (action.type) {
    case SEARCH:
      console.log('search action', action, state);
      return {
        ...state,
        data: action.payload.data,
        isLoading: action.payload.isLoading,
      };
    case LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    default:
      return state;
  }
};

export default searchReducer;
