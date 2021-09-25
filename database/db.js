const mongoose = require('mongoose')
const Books = require('./models/book.model')
const Users = require('./models/user.model')

require('dotenv').config()

mongoose.connect(
  process.env.MONGODB_ENDPOINT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)