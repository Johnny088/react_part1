import axios from 'axios';
export const loadAuthors = () => async dispatch => {
  const authorsUrl = import.meta.env.VITE_AUTHORS_URL;
  const pageCount = 100;
  const page = 1;
  const url = `${authorsUrl}?page_size=${pageCount}&page=${page}`;
  try {
    const response = await axios.get(url);
    const { data, status } = response;
    if (status === 200) {
      dispatch({ type: 'loadAuthors', payload: data.data.items });
      return true;
    } else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const createAuthor = data => async dispatch => {
  try {
    const authorsUrl = import.meta.env.VITE_AUTHORS_URL;
    const response = await axios.post(authorsUrl, data);
    if (response.status === 200) {
      dispatch({ type: 'addNewAuthor', payload: data });
    }
  } catch (error) {
    console.log(error);
  }
};
export const updateAuthor = currentData => async dispatch => {
  const authorsUrl = import.meta.env.VITE_AUTHORS_URL;
  const response = await axios.put(authorsUrl, currentData);
  if (response.status === 200) {
    dispatch({ type: 'updateAuthor', payload: currentData });
  }
};
export const deleteAuthor = id => async dispatch => {
  const authorsUrl = import.meta.env.VITE_AUTHORS_URL;
  try {
    await axios.delete(`${authorsUrl}/${id}`);
    dispatch({ type: 'removeAuthor', payload: id });
  } catch (error) {
    console.log(error);
  }
};
