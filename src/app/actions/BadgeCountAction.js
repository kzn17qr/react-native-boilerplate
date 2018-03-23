// @flow

const badgeCountAction = (count: number) => ({
  type: 'BADGE_COUNT',
  payload: {
    count,
  },
});

export { badgeCountAction };
