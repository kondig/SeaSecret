var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
const path = require('path');

var transport = {
  host: "smtp-mail.outlook.com", //replace with your email provider
  port: 587,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}
var transporter = nodemailer.createTransport(transport);

// verify connection configuration
transporter.verify(function(error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var message = req.body.message
  var content =  `A person submitted a SeaSecret contact form. \n\nName:\n${name}\n\nEmail:\n${email}\n\nMessage:\n${message}`
  var html =  
  `A person submitted a SeaSecret contact form. 
  <br><br>
  Name:<br><span style="font-size:18px;font-weight:700">${name}</span>
  <br><br>
  Email:<br><span style="font-size:18px;font-weight:700">${email}</span>
  <br><br>
  Message:<br><b>${message}</b>` 
  var mail = {
    from: '"SeaSecret" condig69@hotmail.com',
    to: 'condig69@hotmail.com',
    subject: 'Booked boat trip',
    text: content,
    html: html
  }  
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const PORT = process.env.PORT || 8080;
const app = express()
// for deployment
app.use(express.static(path.resolve(__dirname, '../build')));
//----------------------------------------------------
// app.use(cors())
// app.use(express.json())
// app.use('/', router)

app.listen(PORT, () => {
  console.log(`our server initiated on port ${PORT}`);
});