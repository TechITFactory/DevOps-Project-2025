require("dotenv").config();

module.exports = {
  PORT: process.env.PORT || 4006,
  SMTP_HOST: process.env.SMTP_HOST || "smtp.example.com",
  SMTP_USER: process.env.SMTP_USER || "user@example.com",
  SMTP_PASS: process.env.SMTP_PASS || "password",
  TWILIO_SID: process.env.TWILIO_SID || "dummy",
  TWILIO_AUTH: process.env.TWILIO_AUTH || "dummy",
  TWILIO_PHONE: process.env.TWILIO_PHONE || "+1234567890",
  FCM_KEY: process.env.FCM_KEY || "dummy"
};
