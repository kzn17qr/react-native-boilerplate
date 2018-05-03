// @flow

import { LapEntity, ScheduleEntity } from './apiService';

const reqInit = {
  method: 'GET',
  headers: {
    pragma: 'no-cache',
    'cache-control': 'no-cache',
  },
};

const getRaceSchedule = (year: number): Promise<ScheduleEntity> => {
  const url = `https://ergast.com/api/f1/${year}.json`;
  return fetch(url, reqInit)
    .then(res => res.json())
    .then(json => new ScheduleEntity(json))
    .catch((err) => {
      console.log(err);
      return null;
    });
};

const getFetch = (lapNumber: number = 1): Promise<LapEntity> => {
  const url = `https://ergast.com/api/f1/current/last/laps/${lapNumber}.json`;
  return fetch(url, reqInit)
    .then(res => res.json())
    .then(json => new LapEntity(json))
    .catch((err) => {
      console.log(err);
      return null;
    });
};

const getFetches = (roundNumber: number = 1): Promise<LapEntity> => {
  const url = `https://ergast.com/api/f1/current/${roundNumber}/laps.json?limit=2000`;
  return fetch(url, reqInit)
    .then(res => res.json())
    .then(json => new LapEntity(json))
    .catch((err) => {
      console.log(err);
      return null;
    });
};
// ---- for debug -s-
// const getFetches = (): Promise<LapEntity> =>
//   new Promise(resolve => resolve(new LapEntity(JSON.parse(dbgRes))));
// ---- for debug -e-

export { getRaceSchedule, getFetch, getFetches };
