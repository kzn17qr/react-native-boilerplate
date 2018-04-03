// @flow

const reqInit = {
  method: 'GET',
  headers: {
    pragma: 'no-cache',
    'cache-control': 'no-cache',
  },
};

const getFetch = () => {
  const url = 'https://ergast.com/api/f1/2018/1/laps/1.json';
  return fetch(url, reqInit)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.log(err));
};

export { getFetch };
