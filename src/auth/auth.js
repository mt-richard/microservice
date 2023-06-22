const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const port = 3001; 

function start() {
  app.get('/', (req, res) => {
    res.send('Auth API by Richard.');
  });

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth : {
      user : "richardtuyishime43@gmail.com",
      pass: "eoareecletswmxap"
    }
  });

  const mailOptions = {
    form: "richardtuyishime43@gmail.com",
    to: "mbanzatrichard@gmail.com",
    subject: "Testing NOdeMailer",
    text: "I think its working as well!!!"
  };
  transport.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("email sent: " + info.response);
    }
  })

  app.listen(port, () => {
    console.log(`Server -Auth is listening on port ${port}.`);
  });


}

module.exports = { start };
