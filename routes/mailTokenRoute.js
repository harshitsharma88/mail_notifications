const Router = require("express").Router();
const { oAuth2Client } = require("../mail-service/gmailConfig");

Router.get("/", async (req, res, next)=>{
    try {
        const { tokens } = await oAuth2Client.getToken(req.query.code);
        console.log("Token Recieved",tokens)
        console.log(req.query.code, "mail token");
        res.send("Auth Successfull");
    } catch (error) {
        console.error(error);
    }
});


module.exports = Router;