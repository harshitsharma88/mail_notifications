const { google } = require("googleapis");
const { oAuth2Client } = require("./gmailConfig");

const gmail = google.gmail({version : "v1", auth : oAuth2Client});

async function sendGmail(to, subject, mail) {
    try {
        console.log("HERE")
        const emailLines = [
            `To: ${to}`,
            'Content-Type: text/html; charset=UTF-8',
            'MIME-Version: 1.0',
            `Subject: ${subject}`,
            '',
            mail,
          ];
          const email = emailLines.join('\r\n').trim();

        console.log(email);
        
        // Base64 encode the email
        const encodedMessage = Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
        
        const result = await gmail.users.messages.send({
            userId: 'me',
            requestBody: { raw: encodedMessage },
          });
          return result.data;
    } catch (error) {
        throw new Error(error);
    }
    
}

module.exports = {
    gmail,
    sendGmail
}