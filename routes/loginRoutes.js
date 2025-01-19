const Router = require('express').Router();
const path = require("path");
const {oAuth2Client} = require("../mail-service/gmailConfig");


Router.get("/auth", async (req, res, next)=>{
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline', // Ensures refresh token is provided
        prompt: 'consent', // Forces the refresh token to be reissued if missing
        scope: [
            'https://www.googleapis.com/auth/gmail.modify',
            'https://www.googleapis.com/auth/gmail.send',
            'https://www.googleapis.com/auth/gmail.compose',
            'https://www.googleapis.com/auth/contacts.other.readonly',
            'https://www.googleapis.com/auth/contacts.readonly',
        ]
    });
    res.redirect(authUrl);

})

Router.get("/login", (request, response) => {
    const loginpagepath = path.resolve("views/pages/login.html");
    response.sendFile(loginpagepath);
});


Router.post("/login", (request, response) => {
    const { username, password } = request.body;
    const id = "admin";
    const pass = "admin";
    if (id === username && pass === password) {
        response.status(200).json({ message: "Login successful", success: true });
    } else {
        response.status(400).json({ message: "Invalid username or password", success: false });
    }
});

module.exports = Router;
