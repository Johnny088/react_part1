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
    case 'updateAuthor':
      return {
        ...state,
        authors: [
          ...state.authors.filter(a => a.id != action.payload.id),
          action.payload,
        ].toSorted((a, b) => a.id < b.id),
      };
    case 'addNewAuthor':
      return {
        ...state,
        authors: [...state.authors, action.payload],
      };
    default:
      return state;
  }
};
