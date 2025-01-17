const Router = require('express').Router();
const path = require("path");


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
