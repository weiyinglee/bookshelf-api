const mongoose = require('mongoose')
const Schema = mongoose.Schema

const books = mongoose.model('Books', new Schema({
  title: String,
  authorName: String,
  finished: Boolean,
  imageUrl: String,
  link: String,
  note: String,
  userId: String,
  owned: Boolean,
}))

module.exports = {
  books: books
}