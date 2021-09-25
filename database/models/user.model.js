const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Books = require('./book.model')

const users = mongoose.model('Users', new Schema({
  name: String,
  email: String,
  userId: String,
  private: Boolean,
}))

module.exports = {
  users: users
}
