const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
// const creds = require('../../config/config.js');
const creds = require('../../config/default.json')

const { check, validationResult } = require('express-validator');


// @route    Get api/email
// @desc     Test Route
// @access   Public
router.get('/', (req, res) => res.send('Email Route'))



// @route    Post api/form
// @desc     Post Email Route
// @access   Public
router.post('/', [
  // validation using express-validator
  check('name', 'Name is required')
    .not()
    .isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('number', 'Please submit phone number in 1115557777 format.').isLength({ min: 10 }),
  check('select', 'Please make a selection.').not()
    .isEmpty(),
  check('date', 'Please select a future date.').not()
    .isEmpty(),
  check('message', 'Please submit a message with a minimum of 5 characters.').not()
    .isEmpty().isLength({ min: 5 }),
],
  (req, res) => {
    // Object of data being sent to route
    console.log(req.body)

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    res.send('User route')

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

module.exports = router;