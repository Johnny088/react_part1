import axios from 'axios';
export const loadCars = () => async dispatch => {
  const carUrl = import.meta.env.VITE_BASE_API_CAR_URL;
  const limit = 150;
  const currentPage = 1;
  try {
    const { data, status } = await axios.get(carUrl, {
      params: {
        page_size: limit,
        page: currentPage,
      },
    });
    if (status === 200) {
      dispatch({ type: 'loadCars', payload: data.data.items });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const createCar = data => async dispatch => {
  const carUrl = import.meta.env.VITE_BASE_API_CAR_URL;
  try {
    const response = await axios.post(carUrl, data);
    if (response.status >= 200 && response.status < 300) {
      dispatch({ type: 'createCar', payload: response.data });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

export const removeCar = id => async dispatch => {
  const carUrl = import.meta.env.VITE_BASE_API_CAR_URL;
  try {
    const response = await axios.delete(`${carUrl}/${id}`);
    if (response.status >= 200 && response.status < 300) {
      dispatch({ type: 'removeCar', payload: id });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const updateCar = newCar => async dispatch => {
  const carUrl = import.meta.env.VITE_BASE_API_CAR_URL;
  try {
    console.log(newCar);
    let response = await axios.put(carUrl, newCar);
    if (response.status >= 200 && response.status < 300) {
      response = await axios.get(carUrl);
      const { data } = response;
      dispatch({ type: 'updateCar', payload: data.data.items });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
