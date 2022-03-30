const mongoose = require('mongoose');

const { hotelSchema } = require('./hotel');

const hotelsSchema = mongoose.Schema({
  hotels: [hotelSchema],
});

// assign the document in the 'hotel' collection in db
const Hotel = mongoose.model('hotel', hotelsSchema);

module.exports = Hotel;
