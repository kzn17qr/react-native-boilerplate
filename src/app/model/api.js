// @flow

import ApiService from './apiService';

const reqInit = {
  method: 'GET',
  headers: {
    pragma: 'no-cache',
    'cache-control': 'no-cache',
  },
};

const getFetch = (lapNumber: number = 1): Promise<ApiService> => {
  const url = `https://ergast.com/api/f1/current/last/laps/${lapNumber}.json`;
  return fetch(url, reqInit)
    .then(res => res.json())
    .then(json => new ApiService(json))
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export { getFetch };
