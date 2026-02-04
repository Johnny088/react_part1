const initState = {
  authors: [],
  isLoaded: false,
};

export const authorReducer = (state = initState, action) => {
  switch (action.type) {
    case 'loadAuthors':
      return { ...state, isLoaded: true, authors: action.payload };
    case 'removeAuthor':
      return {
        ...state,
        authors: state.authors.filter(a => a.id != action.payload),
      };
    default:
      return state;
  }
};
