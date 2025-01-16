const whatsappTemplate = require("../utils/whatsappTemplate");
const catchBlock = require("../utils/errorHandler");

async function sendWP_Message(number, textMessage){
    try {
        const textArray = [textMessage.subject, textMessage.body]
        return await whatsappTemplate(number, textArray);
    } catch (error) {
        catchBlock(error, 'Sending Whatsapp Template')
    }
}

module.exports = { sendWP_Message }