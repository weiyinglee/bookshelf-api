const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const db = require('../database/db')
const Users = mongoose.model('Users')
const Books = mongoose.model('Books')

router.get('/get', (req, res, next) => {
  Users
  .find()
  .populate('books')
  .exec((err, users) => {
    if (err) return res.json({ success: false, error: err })
    res.json({ success: true, users })
  })
})

router.put('/update/:email', (req, res, next) => {
  const { email } = req.params
  Users
  .findOneAndUpdate(
    { email },
    { $set: req.body },
    { new: true }
  )
  .exec((err, user) => {
    if(err) return res.json({ success: false, error: err })
    res.json({ success: true })
  })
})

router.post('/register', (req, res, next) => {
  const { name, email, userId } = req.body
  const newUser = new Users({
    name, email, userId, private: false,
  })
  Users
  .findOne({ email })
  .populate('books')
  .exec((err, user) => {
    if(err) return res.json({ success: false, error: err })
    if(!user) {
      newUser.save(err => {
        if(err) return res.json({ success: false, error: err })
        res.json({ success: true, user: newUser })
      })
    } else {
      res.json({ success: true, user })
    }
  })
})

module.exports = router
