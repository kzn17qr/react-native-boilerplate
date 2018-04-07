// @flow

class ApiService {
  series: string;
  round: number;
  raceDate: number;
  raceName: string;

  constructor(props: *) {
    const { MRData } = props;
    this.series = MRData.series;
    this.round = MRData.RaceTable.round;
    this.raceDate = MRData.RaceTable.Races[0].date;
    this.raceName = MRData.RaceTable.Races[0].raceName;
  }
}

export default ApiService;
