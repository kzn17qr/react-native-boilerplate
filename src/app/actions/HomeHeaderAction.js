// @flow

import { BADGE_COUNT, SEARCH, LOADING, INPUT_LAP } from './actionConstants';
import { getFetch } from '../model/api';

const badgeCountAction = (count: number) => ({
  type: BADGE_COUNT,
  payload: {
    count,
    isLoading: false,
  },
});

const searchAction = (lapNumber: number) =>
  getFetch(lapNumber).then(data => ({
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

const setLapNumber = (laps: string) => ({
  type: INPUT_LAP,
  payload: {
    laps,
  },
});

export { badgeCountAction, searchAction, loading, setLapNumber };
