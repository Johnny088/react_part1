const initState = {
  brands: [],
  isLoaded: false,
};

export const brandReducer = (state = initState, action) => {
  switch (action.type) {
    case 'loadBrands':
      return { ...state, isLoaded: true, brands: action.payload };
    default:
      return state;
  }
};
