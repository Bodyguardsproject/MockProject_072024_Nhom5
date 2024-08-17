const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const dotenv = require('dotenv');
dotenv.config();

// OAuth2
const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID, // Client ID from Google Cloud Console
  process.env.GOOGLE_CLIENT_SECRET, // Client Secret from Google Cloud Console
  'https://developers.google.com/oauthplayground' // Redirect URL
);

oAuth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });

const sendEmail = async (to, subject, text) => {
  try {
    // Get access token from OAuth2 client
    const { token } = await oAuth2Client.getAccessToken();

    // Create transporter with OAuth2
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.GOOGLE_EMAIL,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: token, // Use token from OAuth2 client
      },
    });

    // Setup email
    const mailOptions = {
      from: process.env.GOOGLE_EMAIL,
      to,
      subject,
      text,
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent:', result);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendEmail;
