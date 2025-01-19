const { CronJob } = require("cron");

function scheduleCronJob(callback, runtime = "0 0 7 * * *", timezone = "Asia/Kolkata", oncomplete = null){
    try {
        const job = 
        new CronJob(runtime, callback, oncomplete, true, timezone);
        return job;
    } catch (error) {
        throw new Error("Job Not Scheduled");
        process.exit(0);
    }
}

module.exports = scheduleCronJob;
