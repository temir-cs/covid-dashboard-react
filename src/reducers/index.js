const initialState = {
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GLOBAL_DATA_LOADED':
      return {
        data: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
