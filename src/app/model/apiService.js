// @flow

class ApiService {
  season: number;
  round: number;
  url: string;
  raceName: string;
  Circuit: Object;
  date: string;
  Laps: Object[];
  // RaceTable: Object;

  constructor(props: *) {
    const { MRData: { RaceTable: { Races } } } = props;
    Object.assign(this, Races[0]);
  }
}

export default ApiService;
