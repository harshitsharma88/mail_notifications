const { metaPostRequest } = require("./networkRequests");

module.exports = async function( number, textArray){
    return await metaPostRequest({
      "messaging_product": "whatsapp",
      "to": number,
      "type": "template",
      "template": { 
        "name": "text_message_template_one_17_dec",       
        "language": {
          "code": "en_US"  
        },
        "components": [
            {
                "type":"body",
                "parameters":[
                    {
                        "type": "text",
                        "text": textArray[0]
                    },
                    {
                      "type": "text",
                      "text": textArray[1] || "Culture Holidays"
                  }
                ]
            }
        ]
      }
    });
}