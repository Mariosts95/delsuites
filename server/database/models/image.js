const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  altText: String || null,
  height: Number,
  width: Number,
  url: String,
});

module.exports = { imageSchema };
