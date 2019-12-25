const  mongoose = require('mongoose')
const {ATLAS_URI } = require('../../.env')

mongoose.connect(ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = mongoose