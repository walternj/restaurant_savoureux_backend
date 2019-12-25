const  mongoose = require('mongoose')
const ATLAS_URI = process.env.ATLAS_URI

mongoose.connect(ATLAS_URI || "mongodb+srv://savoureux:savoureux@cluster0-4vqrs.mongodb.net/savoureux?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose