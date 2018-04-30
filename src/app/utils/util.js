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
  // const driverId = 'raikkonen';
  input.driverId = input.driverId.toLowerCase();
  const driverData: TypeDriver = {
    driverId: input.driverId,
    laps: 0,
    position: '',
    ts: new Date(1970, 0, 1),
    times: '',
  };
  const [mIdx, sIdx] = [1, 4];
  data.Laps.forEach((lapData) => {
    if (input.laps < parseInt(lapData.number, 10)) return;
    lapData.Timings.filter(timingData => timingData.driverId === input.driverId).forEach((x) => {
      const mm = parseInt(x.time.substring(0, mIdx, 1), 10);
      const ss = parseInt(x.time.substring(sIdx - 2, sIdx, 2), 10);
      const ms = parseInt(x.time.substring(sIdx + 1), 10);
      driverData.ts.setMinutes(driverData.ts.getMinutes() + mm);
      driverData.ts.setSeconds(driverData.ts.getSeconds() + ss);
      driverData.ts.setMilliseconds(driverData.ts.getMilliseconds() + ms);
      driverData.times =
        `${driverData.ts.getHours()}` +
        `:${`0${driverData.ts.getMinutes()}`.slice(-2)}` +
        `:${`0${driverData.ts.getSeconds()}`.slice(-2)}` +
        `.${`00${driverData.ts.getMilliseconds()}`.slice(-3)}`;
      driverData.laps = lapData.number;
      driverData.position = x.position;
    });
  });
  console.log(driverData);
  return data;
};

export { lapCalc };
