import axios from 'axios';
export const loadBrands = () => async dispatch => {
  const brandUrl = import.meta.env.VITE_BASE_API_MANUFACTURE_URL;
  try {
    const { data, status } = await axios.get(brandUrl);
    if (status >= 200 && status < 300) {
      dispatch({ type: 'loadBrands', payload: data.data.items });
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};
