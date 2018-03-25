// @flow

import { SEARCH } from '../actions/actionConstants';

const initialState = {};

type TypeState = {};

type TypeAction = {
  type: string,
  payload: Object,
};

const search = (state: TypeState = initialState, action: TypeAction) => {
  switch (action.type) {
    case SEARCH:
      console.log('search action', action, state);
      return state;
    default:
      return state;
  }
};

export default search;
