const catchBlock = require("../utils/errorHandler");
const { executeStoredProcedure } = require("../dbConnection/dbExecution");

async function send_Reminders(){
    try {
        const allStatuses =  await executeStoredProcedure("GET_STAFFNAMES_TASK_STATUSES");
        console.log(allStatuses);
    } catch (error) {
        catchBlock(error, "Sending Reminders")
    }
}

module.exports = {
    send_Reminders
}