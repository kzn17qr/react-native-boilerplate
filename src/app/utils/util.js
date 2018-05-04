// @flow

import { LapEntity } from '../model/apiService';

type TypeDriver = {
  driverId: string,
  laps: number,
  position: string,
  ts: Date,
  times: string,
};

type TypeCompare = {
  key: string,
  isDesc: boolean,
};

const lapCalc = (data: LapEntity, input: Object): LapEntity => {
  const obj: Object = {};
  const [mIdx, sIdx] = [1, 4];
  input.driverId = input.driverId.toLowerCase();

  if (!data.Laps) return data;

  data.Laps.forEach((lapData) => {
    if (input.laps < parseInt(lapData.number, 10)) return;
    // lapData.Timings.filter(timingData => timingData.driverId === input.driverId).forEach((x) => {
    // lapData.Timings.filter(timingData => true || timingData.driverId === input.driverId).forEach((x) => {
    lapData.Timings.forEach((x) => {
      if (!(x.driverId in obj)) {
        const driverData: TypeDriver = {
          driverId: x.driverId,
          laps: 0,
          position: '',
          ts: new Date(1970, 0, 1),
          times: '',
          gap: '',
        };
        obj[x.driverId] = driverData;
      }

      const mm: number = parseInt(x.time.substring(0, mIdx), 10);
      const ss: number = parseInt(x.time.substring(sIdx - 2, sIdx), 10);
      const ms: number = parseInt(x.time.substring(sIdx + 1), 10);
      obj[x.driverId].ts.setMinutes(obj[x.driverId].ts.getMinutes() + mm);
      obj[x.driverId].ts.setSeconds(obj[x.driverId].ts.getSeconds() + ss);
      obj[x.driverId].ts.setMilliseconds(obj[x.driverId].ts.getMilliseconds() + ms);
      obj[x.driverId].times = formatTime(obj[x.driverId].ts);
      // obj[x.driverId].driverId = x.driverId;
      obj[x.driverId].laps = lapData.number;
      obj[x.driverId].position = x.position;
    });
  });

  // console.log(obj);
  const objLst: Array<Object> = [];
  let topts: Date = new Date(1970, 0, 1);

  Object.keys(obj).forEach((k) => {
    if (obj[k].position !== '1' || obj[k].laps !== `${input.laps}`) return;
    // console.log(`Lap ${obj[k].laps}`);
    // console.log(`[${obj[k].position}]`, obj[k].driverId, obj[k].times);
    topts = obj[k].ts;
    // console.log(`topds=${topts}`);
  });
  // const topKey: string = Object.keys(obj).find(k => obj[k].position === '1' && obj[k].laps === `${input.laps}`);
  // topts = obj[topKey].ts;
  Object.keys(obj).forEach((k) => {
    if (obj[k].laps === `${input.laps}`) {
      obj[k].gap = `+${formatTime(new Date(obj[k].ts - topts), true)}`;
    } else {
      obj[k].position = '-';
      obj[k].gap = `${obj[k].laps} LAPS`;
    }
    objLst.push(obj[k]);
  });

  // console.log(
  //   `[${obj[input.driverId] ? obj[input.driverId].position : ''}]`,
  //   input.driverId,
  //   obj[input.driverId] ? obj[input.driverId].times : '',
  //   obj[input.driverId]
  //     ? // ? `[GAP] ${formatTime(new Date(obj[input.driverId].ts - topts), true)}`
  //     `[GAP] ${obj[input.driverId].gap}`
  //     : '',
  // );

  objLst.sort(sortObjMultiple([
    { key: 'laps', isDesc: true },
    { key: 'position', isDesc: false },
  ]));

  data.GapData = objLst;
  // console.log(data.GapData);
  return data;
};

const formatTime = (d: Date, toUTC: boolean = false): string => {
  if (toUTC) d.setHours(d.getHours() - 9);
  const hh = d.getHours() !== 0 ? `${d.getHours()}:` : '';
  const mm =
    hh !== '' || d.getMinutes() !== 0
      ? `${`0${d.getMinutes()}`.slice(-2)}:`
      : '';
  const ss = `${`0${d.getSeconds()}`.slice(-2)}.`;
  const ms = `${`00${d.getMilliseconds()}`.slice(-3)}`;

  return `${hh}${mm}${ss}${ms}`;
};

const sortObj = (key: string, isDesc: boolean): Function => (
  x: Object,
  y: Object,
) => {
  if (
    !Object.hasOwnProperty.call(x, key) ||
    !Object.hasOwnProperty.call(y, key)
  ) {
    return 0;
  }

  let xValue = typeof x[key] === 'string' ? x[key].toUpperCase() : x[key];
  let yValue = typeof y[key] === 'string' ? y[key].toUpperCase() : y[key];
  xValue = Number.isNaN(xValue) ? xValue : Number(xValue);
  yValue = Number.isNaN(yValue) ? yValue : Number(yValue);

  let compareResult = 0;
  if (xValue < yValue) compareResult = -1;
  else if (xValue > yValue) compareResult = 1;
  return isDesc ? compareResult * -1 : compareResult;
};

const sortObjMultiple = (keys: Array<TypeCompare>): Function => (
  x: Object,
  y: Object,
) => {
  let [i, result] = [0, 0];

  while (result === 0 && i < keys.length) {
    result = sortObj(keys[i].key, keys[i].isDesc)(x, y);
    i++;
  }
  return result;
};

export { lapCalc };
