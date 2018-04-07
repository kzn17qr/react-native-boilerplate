// @flow

import { BADGE_COUNT, SEARCH, LOADING } from './actionConstants';
import { getFetch } from '../model/api';

const badgeCountAction = (count: number) => ({
  type: BADGE_COUNT,
  payload: {
    count,
    isLoading: false,
  },
});

const searchAction = () =>
  getFetch().then(data => ({
    type: SEARCH,
    payload: {
      data,
      isLoading: false,
    },
  }));

const loading = (isLoading: boolean) => ({
  type: LOADING,
  payload: {
    isLoading,
  },
});

export { badgeCountAction, searchAction, loading };
