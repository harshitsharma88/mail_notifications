require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const app = express();
app.use(express.json());

//-- Routes
const emailRoutes = require("./routes/mailRoutes");


//-- Routing endpoints
app.use("/api/mailing", emailRoutes);

app.listen(PORT, ()=>{
    console.log(`Server Runnig on PORT ${PORT}`);
    // require("./utils/networkRequests").postRequest('', {}, {user :"haey"} );
    // maildata = {
    //     mailto : "harshitsrma88@gmail.com",
    //     subject : "SUBHkndsbjkd",
    //     template : "<h2 style=color:red>HEY</h2>",
    //     cc : 'manishkumar.cultureholidays@gmail.com, ankitsharma.cultureholidays@gmail.com',
    //     bcc : 'harshit7174@gmail.com'
    // }
    // require("./mail-controllers/sendMail").sendEmail(maildata);
    // const wpdata = {
    //         subject : "SUBHkndsbjkd",
    //         body : "<h2 style=color:red>HEY</h2>",
    // }
    // require("./whatsapp-controllers/sendWhatsappMessage").sendWP_Message("918059437174", wpdata);
})