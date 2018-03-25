// @flow

import { BADGE_COUNT, SEARCH } from './actionConstants';

const badgeCountAction = (count: number) => ({
  type: BADGE_COUNT,
  payload: {
    count,
  },
});

const searchAction = () => ({
  type: SEARCH,
  payload: {},
});

export { badgeCountAction, searchAction };
