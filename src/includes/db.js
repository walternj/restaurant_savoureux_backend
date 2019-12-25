const  mongoose = require('mongoose')
const ATLAS_URI = process.env.ATLAS_URI

mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose