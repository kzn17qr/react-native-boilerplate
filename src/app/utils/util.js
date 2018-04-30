// @flow

import ApiService from '../model/apiService';

type TypeDriver = {
  driverId: string,
  laps: number,
  position: string,
  ts: Date,
  times: string,
};

const lapCalc = (data: ApiService, input: Object) => {
  input.driverId = input.driverId.toLowerCase();
  const obj = {};
  const [mIdx, sIdx] = [1, 4];
  data.Laps.forEach((lapData) => {
    if (input.laps < parseInt(lapData.number, 10)) return;
    // lapData.Timings.filter(timingData => timingData.driverId === input.driverId).forEach((x) => {
    lapData.Timings.filter(timingData => true || timingData.driverId === input.driverId).forEach((x) => {
      if (!(x.driverId in obj)) {
        const driverData: TypeDriver = {
          driverId: '',
          laps: 0,
          position: '',
          ts: new Date(1970, 0, 1),
          times: '',
        };
        obj[x.driverId] = driverData;
      }
      const mm = parseInt(x.time.substring(0, mIdx, 1), 10);
      const ss = parseInt(x.time.substring(sIdx - 2, sIdx, 2), 10);
      const ms = parseInt(x.time.substring(sIdx + 1), 10);
      obj[x.driverId].ts.setMinutes(obj[x.driverId].ts.getMinutes() + mm);
      obj[x.driverId].ts.setSeconds(obj[x.driverId].ts.getSeconds() + ss);
      obj[x.driverId].ts.setMilliseconds(obj[x.driverId].ts.getMilliseconds() + ms);
      obj[x.driverId].times = formatTime(obj[x.driverId].ts);
      obj[x.driverId].driverId = x.driverId;
      obj[x.driverId].laps = lapData.number;
      obj[x.driverId].position = x.position;
    });
  });
  console.log(obj);
  let topts: Date = new Date(1970, 0, 1);
  Object.keys(obj).forEach((k) => {
    if (obj[k].position === '1' && obj[k].laps === `${input.laps}`) {
      console.log(`Lap ${obj[k].laps}`);
      console.log(`[${obj[k].position}]`, obj[k].driverId, obj[k].times);
      topts = obj[k].ts;
    }
  });
  console.log(
    `[${obj[input.driverId].position}]`,
    input.driverId,
    obj[input.driverId] ? obj[input.driverId].times : '',
    obj[input.driverId]
      ? `[GAP] ${formatTime(new Date(obj[input.driverId].ts - topts), true)}`
      : '',
  );
  return data;
};

const formatTime = (d: Date, toUTC: boolean = false): string => {
  if (toUTC) d.setHours(d.getHours() - 9);
  return (
    `${d.getHours()}` +
    `:${`0${d.getMinutes()}`.slice(-2)}` +
    `:${`0${d.getSeconds()}`.slice(-2)}` +
    `.${`00${d.getMilliseconds()}`.slice(-3)}`
  );
};

export { lapCalc };
