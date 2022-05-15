const mongoose = require('mongoose');

const amenitySchema = mongoose.Schema({
  code: Number,
  formatted: String,
});

module.exports = { amenitySchema };
