// get the hotel model structure
const Hotel = require('../models/hotel');

// add fetched hotels to db
const addHotels = async (hotels) => {
  // map each hotel to a hotel model and save it to db
  await hotels.map((el) => {
    const hotel = new Hotel(el);
    hotel.save();
  });
};

// get hotels from db
const getHotels = async () => {
  // get all hotels from db
  const hotels = await Hotel.find().exec();
  // return hotels
  return hotels;
};

// check how many hotels are in db
const hotelsCounter = async () => {
  // get how many hotels are in db
  const count = await Hotel.countDocuments();
  // return hotels number
  return count;
};

module.exports = { addHotels, getHotels, hotelsCounter };
