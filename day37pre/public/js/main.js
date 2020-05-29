const chatForm = document.getElementById('chat-form')
const socket = io()

socket.on('message',message=>{
    console.log(message)
    outputMessage(message)
})

chatForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let msg = e.target.elements.msg.value
    socket.emit('chatMessage',msg)
    e.target.elements.msg.value = ""
    e.target.elements.msg.focus();
    console.log(msg)
})

function outputMessage (msg){
    let div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `<p class="text"> ${msg} </p>`
    document.querySelector('.chat-messages').appendChild(div)

}