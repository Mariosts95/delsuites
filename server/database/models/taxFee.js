const mongoose = require('mongoose');

const { moneySchema } = require('./money');

const taxFeeSchema = mongoose.Schema({
  formatted: String,
  category: String,
  charge: moneySchema,
});

module.exports = { taxFeeSchema };
