const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Books = require('./book.model')

const users = mongoose.model('Users', new Schema({
  name: String,
  email: String,
  userId: String,
}))

module.exports = {
  users: users
}
