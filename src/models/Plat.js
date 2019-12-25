const mongoose = require('mongoose')

const PlatsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },  
  description: {
    type: String,
    required: true
  }, 
  price: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    require: true
  }
}, {
  toJSON: {
    virtuals: true
  }
})

PlatsSchema.virtual('photo_url').get(function() {
  return `process.env.BACKEND_URL || http://localhost:9000/files/${this.photo}`
})

module.exports = mongoose.model('Plats', PlatsSchema)