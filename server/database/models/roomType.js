const mongoose = require('mongoose');

const { imageSchema } = require('./image');
const { amenitySchema } = require('./amenity');
const { roomRateSchema } = require('./roomRate');

const roomTypeSchema = mongoose.Schema({
  roomTypeId: String,
  name: String,
  description: String,
  maxOccupancy: Number,
  rates: [roomRateSchema],
  images: [imageSchema],
  amenities: [amenitySchema],
});

module.exports = { roomTypeSchema };
