const initState = {
  cars: [],
  isLoaded: false,
};

export const carReducer = (state = initState, action) => {
  switch (action.type) {
    case 'loadCars':
      return { ...state, isLoaded: true, cars: action.payload };
    default:
      return state;
  }
};
