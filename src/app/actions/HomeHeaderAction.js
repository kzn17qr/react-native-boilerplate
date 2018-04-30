// @flow

import {
  BADGE_COUNT,
  SEARCH,
  LOADING,
  INPUT_LAP,
  INPUT_DRIVER,
} from './actionConstants';
import { getFetch, getFetches } from '../model/api';
import { lapCalc } from '../utils/util';

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

const searchAllAction = (input: Object, isFetched: boolean) =>
  (isFetched
    ? {
      type: SEARCH,
      payload: {
        data: null,
        input,
        isLoading: false,
        isFetched: true,
      },
    }
    : getFetches()
      .then(data => lapCalc(data, input))
      .then(data => ({
        type: SEARCH,
        payload: {
          data,
          isLoading: false,
          isFetched: true,
        },
      })));

const loading = (isLoading: boolean) => ({
  type: LOADING,
  payload: {
    isLoading,
  },
});

const setLapNumber = (laps: number) => ({
  type: INPUT_LAP,
  payload: {
    laps,
  },
});

const setDriver = (driverId: string) => ({
  type: INPUT_DRIVER,
  payload: {
    driverId,
  },
});

export {
  badgeCountAction,
  searchAction,
  searchAllAction,
  loading,
  setLapNumber,
  setDriver,
};
