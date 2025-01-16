const { mailConfig } = require("../configurations/emailConfiguration");
const catchBlock = require("../utils/errorHandler");
const { renderTemplate } = require("./generateMailTemplateData");
const { sendWP_Message } = require("../whatsapp-controllers/sendWhatsappMessage");

async function sendEmail(req, res, next){
    try {
        const { maildata, recievertype , username, mailbody, event, sendwhatsapp, whatsappnumber} = req.body;
        if(!maildata) return res.status(401).json("Data not available");
        const templateData = await renderTemplate({username, mailbody}, event);
        let mailed = false;
        let wtsap = !sendwhatsapp;
        if(templateData){
            const mailSendOptions = {
                from: process.env.email_user,
                to: maildata.mailto,
                subject : maildata.subject,
                html: templateData,
                cc : maildata.cc,
                bcc : maildata.bcc
            }
             mailed  = await mailConfig.sendMail(mailSendOptions);
        }
        const {data} = await sendWP_Message(whatsappnumber, { subject : username, body : mailbody});
        wtsap = data;
        if(!mailed && !wtsap) return res.status(400).json("Template Not Rendered");
        return res.status(200).json("Sent");
    } catch (error) {
        catchBlock(error, 'Sending Mail', res)
    }
}

module.exports = {
    sendEmail
}



