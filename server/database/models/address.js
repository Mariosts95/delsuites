const mongoose = require('mongoose');

const addressSchema = mongoose.Schema({
  line1: String,
  line2: String,
  city: String,
  region: String,
  country: String,
  countryName: String,
  postalCode: String,
});

module.exports = { addressSchema };
