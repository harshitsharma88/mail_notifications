const nodemailer = require("nodemailer");

const mailConfig = nodemailer.createTransport({
    service : 'gmail',
    auth: {
      user: process.env.email_user,
      pass: process.env.email_app_pass
    },
});

module.exports = {
    mailConfig
}