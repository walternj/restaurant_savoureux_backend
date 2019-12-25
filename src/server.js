const express = require('express')
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const path = require('path')
const http = require('http')
const socketIO = require('socket.io')

const routes = require('./routes')

const app = express()
const server = http.Server(app)
const io = socketIO(server)

require('./includes/db')

io.on('connection', socket => {
    console.log(`New user connected: ${socket.id}`)

    socket.on('sentMessage', data => {
        console.log('a new message was sent: ',data)
        socket.broadcast.emit('refreshMessagesList')
    })

    socket.on('messageUpdated', () => {
        socket.broadcast.emit('messageSaw')
    })

    socket.on('messageDeleted', () => {
        socket.broadcast.emit('messageDeletedConfirmation')
        console.log('send delete confirmation')
    })

    socket.on('menuPosted', () => {
        socket.broadcast.emit('menuHasPosted')
        console.log('a menu has posted...')
    })

    socket.on('menuDeleted', () => {
        socket.broadcast.emit('menuHasDeleted')
        console.log('a menu has deleted...')
    })

    socket.on('disconnect', () => {
        console.log('User disconnected')
    })
})

port = process.env.PORT || 9000;

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(routes)
    
server.listen(port)