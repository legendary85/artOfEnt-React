const express = require('express');
const bodyparser = require('body-parser');
const nodemailer = require('nodemailer');
const creds = require('./config/config.js');
// const connectEmail = require('./config/db');
const app = express();

// Connect Email
// connectEmail();

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.post('/api/form', (req, res) => {
  console.log(req.body)

  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
    <h3>Contact Details<h3>
    <ul style="list-style-type:none">
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Phone: ${req.body.number}</li>
      <li>Package: ${req.body.select}</li>
      <li>Date of Event: ${req.body.date}</li>
    </ul>
    <h3>Message:</h3>
    <p>${req.body.message}</p>
      `



    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        // user: connectEmail.USER,
        // pass: connectEmail.PASS
        user: creds.USER,
        pass: creds.PASS
      },
      // tls: {
      //   rejectUnauthorized: false
      // }
    });

    let mailOptions = {
      // from: connect.FROM,
      // to: connectEmail.TO,
      from: creds.FROM,
      to: creds.TO,
      subject: 'New Message',
      text: req.body.message,
      html: htmlEmail
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err)
      }

      console.log('Message sent: %s', info.message)
      console.log('Message URL: %s', nodemailer.getTestMessageUrl(info))
    })

  })
})

const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})