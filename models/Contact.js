const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  number: {
    type: Number,
    required: true,
    unique: true,
  },
  relationship_status: {
    type: String,
    // required: true,
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ["Point"], // 'location.type' must be 'Point'
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
    },
  },
});

module.exports = mongoose.model('Contact', contactSchema)

// Decimal128 for long and latt coordination
