import {
  GLOBAL_URL,
  COUNTRIES_URL,
  GLOBAL_DAILY_URL,
  INVALID_GEO_NAMES,
  POPULATION_UNIT,
} from './consts';

export default class CovidDataService {
  constructor() {
    this.globalURL = GLOBAL_URL;
    this.countriesURL = COUNTRIES_URL;
    this.globalDailyURL = GLOBAL_DAILY_URL;
    this.invalidGeoNames = INVALID_GEO_NAMES;
  }

  getResource = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`Could not fetch: ${url}, received ${res.status}`);
    }
    const data = await res.json();
    return data;
  };

  getGlobalData = async () => {
    const res = await this.getResource(this.globalURL);
    return this._transformGlobalData(res);
  };

  getCountriesData = async () => {
    const res = await this.getResource(this.countriesURL);
    return this._transformCountriesData(res);
  };

  _transformGlobalData = (data) => ({
    lastUpdated: new Date(),
    population: data.population,
    totalConfirmed: data.cases,
    totalRecovered: data.recovered,
    totalDeaths: data.deaths,
    newConfirmed: data.todayCases,
    newRecovered: data.todayDeaths,
    newDeaths: data.todayRecovered,
    confirmedPer100K: Math.round((data.cases * POPULATION_UNIT) / data.population),
    recoveredPer100K: Math.round((data.recovered * POPULATION_UNIT) / data.population),
    deathsPer100K: Math.round((data.deaths * POPULATION_UNIT) / data.population),
    newConfirmedPer100K:
      Math.round((data.todayCases * POPULATION_UNIT * 100) / data.population) / 100,
    newRecoveredPer100K:
      Math.round((data.todayRecovered * POPULATION_UNIT * 100) / data.population) / 100,
    newDeathsPer100K:
      Math.round((data.todayDeaths * POPULATION_UNIT * 100) / data.population) / 100,
  });

  _transformCountriesData = (data) => {
    const result = [];
    data.forEach((item) => {
      if (!INVALID_GEO_NAMES.includes(item.country)) {
        result.push({
          country: item.country || 0,
          population: item.population || 0,
          lat: item.countryInfo.lat || 0,
          long: item.countryInfo.long || 0,
          flagPath: item.countryInfo.flag,
          totalConfirmed: item.cases || 0,
          totalRecovered: item.recovered || 0,
          totalDeaths: item.deaths || 0,
          newConfirmed: item.todayCases || 0,
          newRecovered: item.todayRecovered || 0,
          newDeaths: item.todayDeaths || 0,
          confirmedPer100K: item.population
            ? Math.round((item.cases * POPULATION_UNIT) / item.population)
            : 0,
          recoveredPer100K: item.population
            ? Math.round((item.recovered * POPULATION_UNIT || 0) / item.population)
            : 0,
          deathsPer100K: item.population
            ? Math.round((item.deaths * POPULATION_UNIT || 0) / item.population)
            : 0,
          newConfirmedPer100K: item.population
            ? Math.round(((item.todayCases || 0) * POPULATION_UNIT * 100) / item.population) / 100
            : 0,
          newRecoveredPer100K: item.population
            ? Math.round(((item.todayRecovered || 0) * POPULATION_UNIT * 100) / item.population) /
              100
            : 0,
          newDeathsPer100K: item.population
            ? Math.round(((item.todayDeaths || 0) * POPULATION_UNIT * 100) / item.population) / 100
            : 0,
        });
      }
    });
    return result;
  };
}
