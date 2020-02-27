const express = require('express');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

// Define Routes
app.use('/api/form', require('./routes/api/email'))
app.use('/api/email', require('./routes/api/email'))



const PORT = process.env.PORT || 3001


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})