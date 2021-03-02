import { getCriteria } from '../utils';

const initialState = {
  global: {},
  countries: [
    // {
    //   confirmedPer100K: 141,
    //   country: 'Afghanistan',
    //   deathsPer100K: 6,
    //   flagPath: 'https://disease.sh/assets/img/flags/af.png',
    //   lat: 33,
    //   long: 65,
    //   newConfirmed: 0,
    //   newConfirmedPer100K: 0,
    //   newDeaths: 0,
    //   newDeathsPer100K: 0,
    //   newRecovered: 0,
    //   newRecoveredPer100K: 0,
    //   population: 39499296,
    //   recoveredPer100K: 125,
    //   totalConfirmed: 55707,
    //   totalDeaths: 2443,
    //   totalRecovered: 49285,
    // },
    // {
    //   confirmedPer100K: 3694,
    //   country: 'Albania',
    //   deathsPer100K: 62,
    //   flagPath: 'https://disease.sh/assets/img/flags/al.png',
    //   lat: 41,
    //   long: 20,
    //   newConfirmed: 986,
    //   newConfirmedPer100K: 34.29,
    //   newDeaths: 19,
    //   newDeathsPer100K: 0.66,
    //   newRecovered: 962,
    //   newRecoveredPer100K: 33.45,
    //   population: 2875726,
    //   recoveredPer100K: 2398,
    //   totalConfirmed: 106215,
    //   totalDeaths: 1775,
    //   totalRecovered: 68969,
    // },
  ],
  loadingCountries: true,
  loadingGlobal: true,
  errorGlobal: null,
  errorCountries: null,
  currentCriteria: 'totalConfirmed',
  currentType: 'cases',
  currentTimePeriod: 'total',
  currentNumberFormat: 'absolute',
};

const reducer = (state = initialState, action) => {
  // console.log(action.type);

  switch (action.type) {
    case 'FETCH_GLOBAL_DATA_REQUEST':
      return {
        ...state,
        loadingGlobal: true,
        errorGlobal: null,
      };
    case 'FETCH_GLOBAL_DATA_SUCCESS':
      return {
        ...state,
        global: action.payload,
        loadingGlobal: false,
        errorGlobal: null,
      };
    case 'FETCH_GLOBAL_DATA_FAILURE':
      return {
        ...state,
        global: {},
        loadingGlobal: false,
        errorGlobal: action.payload,
      };
    case 'FETCH_COUNTRIES_DATA_REQUEST':
      return {
        ...state,
        loadingCountries: true,
        errorCountries: null,
      };
    case 'FETCH_COUNTRIES_DATA_SUCCESS':
      return {
        ...state,
        countries: action.payload,
        loadingCountries: false,
        errorCountries: null,
      };
    case 'FETCH_COUNTRIES_DATA_FAILURE':
      return {
        ...state,
        countries: [],
        loadingCountries: false,
        errorCountries: action.payload,
      };
    case 'SELECTED_DISPLAY_TYPE': {
      const newType = action.payload;
      const { currentTimePeriod, currentNumberFormat } = state;
      return {
        ...state,
        currentType: newType,
        currentCriteria: getCriteria(newType, currentTimePeriod, currentNumberFormat),
      };
    }
    case 'TOGGLE_TIME_PERIOD': {
      const newTimePeriod = state.currentTimePeriod === 'total' ? 'lastUpdated' : 'total';
      const { currentType, currentNumberFormat } = state;
      return {
        ...state,
        currentTimePeriod: newTimePeriod,
        currentCriteria: getCriteria(currentType, newTimePeriod, currentNumberFormat),
      };
    }
    case 'TOGGLE_NUMBER_FORMAT': {
      const newNumberFormat = state.currentNumberFormat === 'absolute' ? 'per100k' : 'absolute';
      const { currentType, currentTimePeriod } = state;
      return {
        ...state,
        currentNumberFormat: newNumberFormat,
        currentCriteria: getCriteria(currentType, currentTimePeriod, newNumberFormat),
      };
    }
    default:
      return state;
  }
};
export default reducer;
