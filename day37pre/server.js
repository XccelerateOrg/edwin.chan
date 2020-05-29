const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const app = express()

const server = http.createServer(app)
const PORT = 8000 || process.env.PORT
const io = socketio(server)

app.use(express.static(path.join(__dirname,'/public')))

io.on('connect', socket =>{
    socket.emit('message','welcome to chatchord')
    socket.broadcast.emit('message','A user has joined the chat')
    socket.on('chatMessage',(msg)=>{
        io.emit('message',msg)
    })
    socket.on('disconnect',()=>{
        io.emit('message','A user has disconnected from the chat')
    })
})

server.listen(PORT,()=> console.log(`server running on port ${PORT}`))