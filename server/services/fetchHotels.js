const axios = require('axios');

// setup request options
const options = {
  method: 'GET',
  url: `${process.env.API_BASE_URL}/?size=${process.env.HOTELS_NUMBER}`,
  headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.API_KEY },
};

// fetch hotels from external API as a promise using axios
const fetchHotels = async () => {
  return await axios
    .request(options)
    .then(({ data }) => {
      const hotels = data.data;
      return hotels;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
};

module.exports = { fetchHotels };
