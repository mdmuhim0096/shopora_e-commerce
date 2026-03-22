const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // required for port 465
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // MUST be Gmail App Password
  },
  tls: {
    rejectUnauthorized: false, // helps avoid some server issues
  },
});

// Verify connection (IMPORTANT for debugging)
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email server is ready");
  }
});

module.exports = transporter;