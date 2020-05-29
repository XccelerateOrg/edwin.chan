const express=require('express')
const app=express()
const server=require('http').Server(app)
const io=require('socket.io')(server)
const path = require('path')

const PORT = 8000 || process.env.PORT

app.use(express.static(path.join(__dirname,'public')))

io.on('connection',socket=>{
    socket.emit('message','Welcome to the chatroom')
    socket.broadcast.emit('message','A user login')
    socket.on('chatMessage',(msg)=>{
        io.emit('message',msg)
    })
})

server.listen(PORT,()=> console.log(`connecting to port ${PORT}`))