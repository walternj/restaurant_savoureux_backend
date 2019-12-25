// index (liste de sessions), show (montré une sole sessiion), store (creer une session), update, destroy (remmove session)
const User = require('../models/User')

module.exports = {
  async store(req, res) {
    const {
      name, 
      email, 
      password, 
    } = req.body

    let user = await User.findOne({ email: req.body.email }).then((user) => {
      if (user) {
        console.log("Il existe dejà un compte avec cet email")
      } else {
        user =  User.create({ name, email, password })
      }
    }).catch((err) => {
     
      console.log(err)
    }) 
    return res.json(user)
  }

}