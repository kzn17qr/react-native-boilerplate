// @flow

import {
  BADGE_COUNT,
  SEARCH,
  LOADING,
  INPUT_LAP,
  // INPUT_DRIVER,
  GET_SCHEDULE,
  INPUT_ROUND,
} from './actionConstants';
import { getFetch, getFetches, getRaceSchedule } from '../model/api';
import { lapCalc } from '../utils/util';

const badgeCountAction = (count: number) => ({
  type: BADGE_COUNT,
  payload: {
    count,
    isLoading: false,
  },
});

const getScheduleAction = (year: number) =>
  getRaceSchedule(year).then(data => ({
    type: GET_SCHEDULE,
    payload: {
      data,
    },
  }));

const searchAction = (lapNumber: number) =>
  getFetch(lapNumber).then(data => ({
    type: SEARCH,
    payload: {
      data,
      isLoading: false,
    },
  }));

const searchAllAction = (input: Object, fetchedRoundNumber: number) =>
  (fetchedRoundNumber === input.round
    ? {
      type: SEARCH,
      payload: {
        data: null,
        input,
        isLoading: false,
        fetchedRoundNumber,
      },
    }
    : getFetches(input.round)
      .then(data => lapCalc(data, input))
      .then(data => ({
        type: SEARCH,
        payload: {
          data,
          isLoading: false,
          fetchedRoundNumber: input.round,
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

const setRoundNumber = (round: number) => ({
  type: INPUT_ROUND,
  payload: {
    round,
  },
});

// const setDriver = (driverId: string) => ({
//   type: INPUT_DRIVER,
//   payload: {
//     driverId,
//   },
// });

export {
  badgeCountAction,
  getScheduleAction,
  searchAction,
  searchAllAction,
  loading,
  setLapNumber,
  setRoundNumber,
  // setDriver,
};
