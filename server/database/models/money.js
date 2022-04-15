const mongoose = require('mongoose');

const moneySchema = mongoose.Schema({
  amount: Number,
  currency: {
    code: String,
  },
});

module.exports = { moneySchema };
