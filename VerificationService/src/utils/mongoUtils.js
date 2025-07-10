const Otp = require('../model/index');
const sendBasicEmail = require("../utils/email-service")
/**
 * Generates a 6-digit OTP for the user and stores it in the DB for 2 minutes.
 */
const getOtp = async (userId, email) => {
  try {
    if (!userId) throw new Error("User ID is required");

    // Optional: remove any existing OTPs for the same user
    await Otp.deleteMany({ userId });

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await Otp.create({ userId, otp });
await sendBasicEmail(
                "jaskaranyt123@gmail.com",
                email,
                "Response from BareFoot",
                "Hi your OTP is "+otp
            );
    return { success: true, message: "Sent OTP on mail" }; // ⚠️ Do not return OTP in prod
  } catch (error) {
    return { success: false, message: error.message || "Failed to generate OTP" };
  }
};

/**
 * Verifies if the given OTP is valid for the user.
 */
const verifyOtp = async (userId, otpInput) => {
  try {
    if (!userId || !otpInput) throw new Error("User ID and OTP are required");

    const record = await Otp.findOne({ userId, otp: otpInput });

    if (!record) {
      return { success: false, message: "Invalid or expired OTP" };
    }

    // Optional: delete OTP after use
    await Otp.deleteOne({ _id: record._id });

    return { success: true, message: "OTP verified successfully" };
  } catch (error) {
    return { success: false, message: error.message || "Failed to verify OTP" };
  }
};

module.exports = { getOtp, verifyOtp };
