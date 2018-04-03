// @flow

import { SEARCH } from '../actions/actionConstants';
import { getFetch } from '../model/api';

const initialState = {};

type TypeState = {};

type TypeAction = {
  type: string,
  payload: Object,
};

const searchReducer = (state: TypeState = initialState, action: TypeAction) => {
  switch (action.type) {
    case SEARCH:
      console.log('search action', action, state);
      getFetch();
      return state;
    default:
      return state;
  }
};

export default searchReducer;
