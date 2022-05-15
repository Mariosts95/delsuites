const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  latitude: Number,
  longitude: Number,
});

module.exports = { locationSchema };
