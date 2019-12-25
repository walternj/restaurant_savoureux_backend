// index (liste de sessions), show (montre une sole session), store (creer une session), update, destroy (remmove session)

const Message = require('../models/Message')

module.exports = {
  async store(req, res) {
    const {
      name, 
      email,
      message,
      date,
      saw
    } = req.body 

    const messages = await  Message.create({ name, email, message, date, saw})
    .then(() => {
      console.log("Messages saved...")
    })
    .catch((err) => {
      console.log("ERROR: ",err)
    }) 
    return res.json(messages)
    console.log(req.body)
  },

  async index(req, res) {
    const data = await Message.find({})

    return res.json(data) 
  },

  async update(req, res) {
   
    await Message.findByIdAndUpdate( req.params.id, {$set: {saw: req.body.saw}}, options= {useFindAndModify: false})
    .then(() => {
      console.log("Message status was updated")
     
    })  
    .catch((err) => {
      console.log(err)
    })
  },

  async destroy(req, res) {
    await Message.findOneAndRemove({_id: req.params.id},  options= {useFindAndModify: false})
    .then(() => {
      console.log("Message deleted", req.params.id)
    })
    .catch((err) => { 
      console.log('ERROR: ', err)
    })
  }
}

