// models/Otp.js
const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  userId: {
    type: String,  // Storing as plain string
    required: true
  },
  otp: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 120 // expires after 2 minutes
  }
});

module.exports = mongoose.model('Otp', otpSchema);
