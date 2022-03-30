const mongoose = require('mongoose');

const { moneySchema } = require('./money');
const { taxFeeSchema } = require('./taxFee');

const roomRateSchema = mongoose.Schema({
  rateId: String,
  start: String,
  end: String,
  hotelAgreement: {
    hotelAgreementId: String,
    dealId: String,
    conditions: [String],
    discount: { count: Number, type: String },
    specialInstructions: String,
    dealsSellable: { remaining: Number },
    href: String,
  },
  maxOccupancy: Number,
  retailRate: {
    total: moneySchema,
    taxesAndFees: {
      payAtHotel: [taxFeeSchema],
      includedInRate: [taxFeeSchema],
    },
  },
  sellerToImpalaPayment: moneySchema,
  sellerCommissionPercentage: Number,
  components: [
    {
      formatted: String,
      type: String,
      includedInRate: Boolean,
    },
  ],
  cancellationPolicies: [
    { start: String, end: String, formatted: String, fee: { type: String, count: Number, price: moneySchema } },
  ],
  roomsSellable: Number,
});

module.exports = { roomRateSchema };
