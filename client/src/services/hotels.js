import axios from 'axios';

// fetch hotels from API
const fetchHotels = async (from = 0, size = 10) => {
  return await axios.get(`${import.meta.env.VITE_API_BASE_PATH}/hotels`, {
    params: { from: from - 1, size },
  });
};

// fetch hotels pages from API
const fetchHotelsPages = async (size = 10) => {
  return await axios.get(`${import.meta.env.VITE_API_BASE_PATH}/hotels/info`, {
    params: { size },
  });
};

// fetch specific hotel from API
const fetchHotel = async (id) => {
  return await axios.get(`${import.meta.env.VITE_API_BASE_PATH}/hotel/${id}`);
};

// redirect to checkout page with reservation info
const checkoutRequest = async (data) => {
  return await axios({
    method: 'post',
    url: `${import.meta.env.VITE_API_BASE_PATH}/checkout`,
    data: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export { fetchHotels, fetchHotel, fetchHotelsPages, checkoutRequest };
