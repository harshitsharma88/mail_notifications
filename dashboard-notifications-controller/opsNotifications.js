const catchBlock = require("../utils/errorHandler");
const { postRequest } = require("../utils/networkRequests");

async function notify_OPS(req, res, next){
    try {
        
    } catch (error) {
        catchBlock(error, "Notification to OPS", res)
    }
}

module.exports = { 
    notify_OPS
}