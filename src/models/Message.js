const mongoose = require('mongoose')

const Message = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true
  }, 
  message: {
      type: String,
      required: true
  },
  date: {
    type: String,
    required: true
  },
  saw: {
    type: Boolean,
    required: true
  }
})
 
module.exports = mongoose.model('Messages', Message)