// index (liste de sessions), show (montré une sole sessiion), store (creer une session), update, destroy (remmove session)
const Plat = require('../models/Plat')

module.exports = {
  
  async store(req, res) {
    const {
      title, 
      description, 
      price,
    } = req.body

    const { filename } = req.file
    
    const plat = await Plat.findOne({ title: req.body.title }).then((plat) => {
      if (plat) {
        console.log("Il existe dejà un plat avec ce nom")
        return res.json("Il existe dejà un plat avec ce nom")
        
      } else {
        
        plat = Plat.create({ 
          title, 
          description, 
          price, 
          photo: filename
        })
        return res.json(plat)
        
      }
    }).catch((err) => {
      console.log(err)

    })   
  }, //end store  

  async index(req, res) {
    const data = await Plat.find({})

    return (
      res.json(data), 
      res.cookie({ Secure, SameSite=None })
    )

  },

  async update(req, res) {
    
  },

  async destroy(req, res) {
    await Plat.findOneAndRemove({_id: req.params.id},  options= {useFindAndModify: false})
    .then(() => {
      console.log("Menu deleted", req.params.id)
    })
    .catch((err) => { 
      console.log('ERROR: ', err)
    })
  }
}