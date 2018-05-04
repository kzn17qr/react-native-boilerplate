// @flow

class ScheduleEntity {
  Races: Array<{
    season: number,
    round: number,
    url: string,
    raceName: string,
    Circuit: {
      circuitName: string,
      Location: {
        country: string,
      },
    },
    date: string,
  }>;

  constructor(props: *) {
    const { MRData: { RaceTable } } = props;
    Object.assign(this, RaceTable);
  }
}

class LapEntity {
  season: number;
  round: number;
  url: string;
  raceName: string;
  // Circuit: Object;
  date: string;
  Laps: Array<{
    number: number,
    Timings: Array<{
      driverId: string,
      position: string,
      time: string,
    }>,
  }>;
  // RaceTable: Object;
  GapData: Array<Object>;

  constructor(props: *) {
    const { MRData: { RaceTable: { Races } } } = props;
    Object.assign(this, Races[0]);
  }
}

export { ScheduleEntity, LapEntity };
