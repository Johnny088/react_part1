const initState = {
  cars: [],
  isLoaded: false,
};

export const carReducer = (state = initState, action) => {
  switch (action.type) {
    case 'loadCars':
      return { ...state, isLoaded: true, cars: action.payload };
    case 'createCar':
      return {
        ...state,
        isLoaded: false,
        cars: [...state.cars, action.payload],
      };
    case 'removeCar': {
      return {
        ...state,
        cars: state.cars.filter(c => c.id != action.payload),
      };
    }
    default:
      return state;
  }
};
