// index (liste de sessions), show (montré une sole sessiion), store (creer une session), update, destroy (remmove session)
const Reservation = require('../models/Reservation')

module.exports = {
  async store(req, res) {
    const {
      name, 
      email,
      people,
      date,
      time
    } = req.body

    const reservation = await  Reservation.create({ name, email, people, date, time })
    .catch((err) => {
      console.log(err)

    }) 
    return res.json(reservation)
    console.log(req.body)
  },

  async index(req, res) {
    const data = await Reservation.find({})
  
    return res.json(data)
  }
}

