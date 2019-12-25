const express = require('express')
const multer = require('multer')

const uploadConfig = require('./config/upload')

const SessionController = require ('./controllers/SessionController')
const PlatsController = require('./controllers/PlatsController')
const ReservationController = require('./controllers/ReservationController')
const MessageController = require('./controllers/MessageController')

const routes = express.Router()
const upload = multer(uploadConfig)

routes.post('/create_account', SessionController.store)

routes.get('/plats', PlatsController.index)
routes.post('/plats', upload.single('photo'), PlatsController.store)
routes.put('/plats/:id', PlatsController.update)
routes.delete('/plats/:id', PlatsController.destroy)

routes.get('/reservations', ReservationController.index)
routes.post('/reservations', ReservationController.store)

routes.get('/messages', MessageController.index)
routes.post('/messages', MessageController.store )
routes.put('/messages/:id', MessageController.update)
routes.delete('/messages/:id', MessageController.destroy)

module.exports = routes