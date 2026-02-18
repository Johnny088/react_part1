import axios from 'axios';
export const loadCars = () => async dispatch => {
  const carUrl = import.meta.env.VITE_BASE_API_CAR_URL;
  limit = 100;
  currentPage = 1;
  try {
    const { data, status } = await axios.get(carUrl, {
      params: {
        page_size: limit,
        page: currentPage,
      },
    });
    console.log(status);
    if (status === 200) {
      dispatch({ type: loadCars, payload: data.data.items });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
