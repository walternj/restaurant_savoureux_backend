const mongoose = require('mongoose')

const Reservation = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true
  }, 
  people: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    require: true
  }
})

module.exports = mongoose.model('Reservations', Reservation)