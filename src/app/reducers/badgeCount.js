// @flow

const initialState = {
  count: 0,
};

const badgeCount = (state: Object = initialState, action: Object) => {
  // console.log(`state.count=${state.count}  action.payload.count=${action.payload.count}`);
  // console.log(`count=${state.count}`);
  switch (action.type) {
    case 'BADGE_COUNT':
      return { ...state, count: state.count + action.payload.count };
    default:
      return state;
  }
};

export default badgeCount;
