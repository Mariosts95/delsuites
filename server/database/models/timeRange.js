const mongoose = require('mongoose');

const timeRangeSchema = mongoose.Schema({
  from: String,
  to: String,
});

module.exports = { timeRangeSchema };
