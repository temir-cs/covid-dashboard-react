const globalDataLoaded = (newData) => ({
  type: 'GLOBAL_DATA_LOADED',
  payload: newData,
});

// eslint-disable-next-line import/prefer-default-export
export { globalDataLoaded };
