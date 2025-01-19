const Router = require('express').Router();
const { sendEmail } =  require("../mail-controllers/sendMail");

Router.post("/sendmail", sendEmail)

module.exports = Router;