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
const getAllHotels = async () => {
  // get all hotels from db
  const hotels = await Hotel.find().exec();
  // return hotels
  return hotels;
};

// get hotels from db paginated
const getHotels = async (page, size) => {
  // convert the params from string to number
  page = parseInt(page);
  size = parseInt(size);

  // get hotels from db
  const hotels = await Hotel.find()
    .skip(page * size)
    .limit(size)
    .exec();
  // return hotels
  return hotels;
};

// get specific hotel from db
const findHotel = async (id) => {
  // get specific hotel from db
  const hotel = await Hotel.findOne({ hotelId: id }).exec();
  // return hotel
  return hotel;
};

// check how many hotels are in db
const hotelsCounter = async () => {
  // get how many hotels are in db
  const count = await Hotel.countDocuments();
  // return hotels number
  return count;
};

module.exports = { addHotels, getHotels, getAllHotels, hotelsCounter, findHotel };
