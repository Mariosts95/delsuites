import axios from 'axios';

// fetch hotels from API
const fetchHotels = async (from = 0, size = 10) => {
  return await axios.get(`/api/hotels`, {
    params: { from: from - 1, size },
  });
};

// fetch hotels pages from API
const fetchHotelsPages = async (size = 10) => {
  return await axios.get(`/api/hotels/info`, {
    params: { size },
  });
};

// fetch specific hotel from API
const fetchHotel = async (id) => {
  return await axios.get(`/api/hotel/${id}`);
};

export { fetchHotels, fetchHotel, fetchHotelsPages };
