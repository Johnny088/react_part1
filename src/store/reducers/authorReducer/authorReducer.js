const initState = {
  authors: [],
  isLoaded: false,
};

export const authorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'loadBooks':
      return { ...state, isLoaded: true, authors: action.payload };
    default:
      return state;
  }
};
