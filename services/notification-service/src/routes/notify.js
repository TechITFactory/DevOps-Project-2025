const express = require("express");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const config = require("../config");

const router = express.Router();

// Email notification
router.post("/email", async (req, res) => {
  try {
    const { to, subject, text } = req.body;
    const transporter = nodemailer.createTransport({
      host: config.SMTP_HOST,
      port: 587,
      secure: false,
      auth: { user: config.SMTP_USER, pass: config.SMTP_PASS }
    });
    await transporter.sendMail({ from: config.SMTP_USER, to, subject, text });
    res.json({ status: "Email sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// SMS notification
router.post("/sms", async (req, res) => {
  try {
    const { to, message } = req.body;
    const client = twilio(config.TWILIO_SID, config.TWILIO_AUTH);
    await client.messages.create({ body: message, from: config.TWILIO_PHONE, to });
    res.json({ status: "SMS sent" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Push notification (dummy, real FCM requires credentials)
router.post("/push", async (req, res) => {
  try {
    const { token, message } = req.body;
    // For demo, we just echo back
    res.json({ status: "Push simulated", token, message });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
