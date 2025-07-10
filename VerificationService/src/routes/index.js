const express = require('express');
const router = express.Router();
const { getOtp, verifyOtp } = require('../utils/mongoUtils');
const sendBasicEmail = require("../utils/email-service")
router.post('/get-otp', async (req, res) => {
    

  const result = await getOtp(req.headers['x-user-id'], req.body.email);
    console.log(JSON.stringify(result, null, 2))
  if (!result.success) {
    return res.status(500).json(result);
  }

  // You would send OTP via SMS/Email here
  
  res.status(200).json({
    success: true,
    message: "OTP sent successfully",
    // otp: result.otp, // 🔐 Only return for testing/debug
  });
});

router.post('/verify-otp', async (req, res) => {
  const { otp } = req.body;

  const result = await verifyOtp(req.headers['x-user-id'], otp);

  if (!result.success) {
    return res.status(400).json(result);
  }

  res.status(200).json(result);
});

module.exports = router;
