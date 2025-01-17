const Router = require('express').Router();

const dashpath =require("dashpath");
Router.get("/login/dashboard", (request,response)=>{
  const dashboardpagepath =   path.resolve("views/pages/dashboard.html");
  response.sendFile(dashboardpagepath)
})


module.exports = Router;