const nodemailer = require('nodemailer');

const{GMAIL_PASS,GMAIL_EMAIL}= require('./server-config');

// Create a transporter object using the default SMTP transport
const mailsender = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
        user: GMAIL_EMAIL, // Your email address
        pass: GMAIL_PASS   // Your email password
    }
});



module.exports = mailsender;    