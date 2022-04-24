import axios from 'axios';

// fetch hotels from API
const fetchHotels = async (page = 1, size = 10) => {
  return await axios.get(`${import.meta.env.VITE_API_BASE_PATH}/hotels`, {
    params: { page, size },
  });
};

// fetch specific hotel from API
const fetchHotel = async (id) => {
  return await axios.get(`${import.meta.env.VITE_API_BASE_PATH}/hotel/${id}`);
};

export { fetchHotels, fetchHotel };
