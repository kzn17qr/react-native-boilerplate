// @flow

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

const badgeCount = (state: TypeState = initialState, action: TypeAction) => {
  switch (action.type) {
    case 'BADGE_COUNT':
      return { ...state, count: state.count + action.payload.count };
    default:
      return state;
  }
};

export default badgeCount;
