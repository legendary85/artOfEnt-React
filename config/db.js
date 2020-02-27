const mongoose = require('mongoose');
const config = require('config');
const email = config.get('USER', 'PASS', 'TO', 'FROM');

const connnectEmail = async () => {
  try {
    await mongoose.connect(email)

    console.log("Email Connected...")
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1)
  }
}

module.exports = connnectEmail;