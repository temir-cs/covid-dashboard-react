const countriesDataLoaded = (countries) => ({
  type: 'FETCH_COUNTRIES_DATA_SUCCESS',
  payload: countries,
});

const countriesDataRequested = () => ({
  type: 'FETCH_COUNTRIES_DATA_REQUEST',
});

const countriesDataError = (error) => ({
  type: 'FETCH_COUNTRIES_DATA_FAILURE',
  payload: error,
});

const globalDataLoaded = (globalData) => ({
  type: 'FETCH_GLOBAL_DATA_SUCCESS',
  payload: globalData,
});

const globalDataRequested = () => ({
  type: 'FETCH_GLOBAL_DATA_REQUEST',
});

const globalDataError = (error) => ({
  type: 'FETCH_GLOBAL_DATA_FAILURE',
  payload: error,
});

const globalDailyRequested = () => ({
  type: 'FETCH_GLOBAL_DAILY_REQUEST',
});

const globalDailyLoaded = (globalDaily) => ({
  type: 'FETCH_GLOBAL_DAILY_SUCCESS',
  payload: globalDaily,
});

const globalDailyError = () => ({
  type: 'FETCH_GLOBAL_DAILY_FAILURE',
});

const countryDailyRequested = () => ({
  type: 'FETCH_COUNTRY_DAILY_REQUEST',
});

const countryDailyLoaded = (countryDaily) => ({
  type: 'FETCH_COUNTRY_DAILY_SUCCESS',
  payload: countryDaily,
});

const countryDailyError = () => ({
  type: 'FETCH_COUNTRY_DAILY_FAILURE',
});

const selectedDisplayType = (type) => ({
  type: 'SELECTED_DISPLAY_TYPE',
  payload: type,
});

const toggleTimePeriod = () => ({
  type: 'TOGGLE_TIME_PERIOD',
});

const toggleNumberFormat = () => ({
  type: 'TOGGLE_NUMBER_FORMAT',
});

const searchedCountry = (query) => ({
  type: 'SEARCHED_COUNTRY',
  payload: query,
});

const selectedCountry = (countryName) => ({
  type: 'SELECTED_COUNTRY',
  payload: countryName,
});

const resetCountry = () => ({
  type: 'RESET_COUNTRY',
});

const getGlobalData = (covidDataService, dispatch) => () => {
  dispatch(globalDataRequested());
  covidDataService
    .getGlobalData()
    .then((data) => {
      dispatch(globalDataLoaded(data));
    })
    .catch((err) => dispatch(globalDataError(err)));
};

const getCountriesData = (covidDataService, dispatch) => () => {
  dispatch(countriesDataRequested());
  covidDataService
    .getCountriesData()
    .then((data) => {
      dispatch(countriesDataLoaded(data));
    })
    .catch((err) => dispatch(countriesDataError(err)));
};

const getGlobalDailyData = (covidDataService, dispatch) => () => {
  dispatch(globalDailyRequested());
  covidDataService
    .getGlobalDaily()
    .then((data) => {
      dispatch(globalDailyLoaded(data));
    })
    .catch((err) => dispatch(globalDailyError(err)));
};

const getCountryDailyData = (covidDataService, dispatch, countryName) => () => {
  dispatch(countryDailyRequested());
  covidDataService
    .getCountryDaily(countryName)
    .then((data) => {
      dispatch(countryDailyLoaded(data));
    })
    .catch((err) => dispatch(countryDailyError(err)));
};

export {
  getGlobalData,
  getCountriesData,
  getGlobalDailyData,
  getCountryDailyData,
  selectedDisplayType,
  toggleTimePeriod,
  toggleNumberFormat,
  searchedCountry,
  selectedCountry,
  resetCountry,
};
