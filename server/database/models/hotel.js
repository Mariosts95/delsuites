const mongoose = require('mongoose');

const { addressSchema } = require('./address');
const { imageSchema } = require('./image');
const { locationSchema } = require('./location');
const { amenitySchema } = require('./amenity');
const { roomTypeSchema } = require('./roomType');
const { timeRangeSchema } = require('./timeRange');

// Schema for each hotel in db
const hotelSchema = mongoose.Schema({
  hotelId: String,
  name: String,
  starRating: Number || null,
  currency: String,
  description: { short: String },
  websiteUrl: String || null,
  externalUrls: [{ name: String, url: String }],
  phoneNumbers: [String],
  emails: [String],
  images: [imageSchema],
  address: addressSchema,
  location: locationSchema,
  timezone: String,
  amenities: [amenitySchema],
  roomTypes: [roomTypeSchema],
  roomCount: Number,
  checkIn: timeRangeSchema,
  checkOut: timeRangeSchema,
  contractable: Boolean,
  termsAndConditions: String,
  createdAt: String,
  updatedAt: String,
});

// index the hotels collection in db by ID
hotelSchema.index({ hotelId: 1 });

// assign the document in the 'hotel' collection in db
const Hotel = mongoose.model('hotel', hotelSchema);

module.exports = Hotel;
