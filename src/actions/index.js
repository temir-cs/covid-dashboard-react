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

export {
  getGlobalData,
  getCountriesData,
  selectedDisplayType,
  toggleTimePeriod,
  toggleNumberFormat,
};
