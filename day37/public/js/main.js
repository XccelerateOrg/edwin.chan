const socket = io()
const chatForm = document.getElementById('chatForm')
const msgArea = document.getElementById('msgArea')
const chatArea = document.querySelector('chatArea')
const userForm = document.getElementById('userForm')

socket.on('message', (msg) => {
    console.log(msg)
    output(msg)
})

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let msg = e.target.elements.msg.value
    socket.emit('chatMessage', msg)
    msgArea.value = ''
    msgArea.focus()
})

userForm.addEventListener('submit',e=>{
    e.preventDefault();
    let userName = e.target.elements.name.value
    socket.emit('userName',userName)
})


function output(msg) {
    let chatArea = document.querySelector('.chatArea')
    let div = document.createElement('div')
    div.classList.add('message')
    div.innerHTML = `<p>${msg}</p>`
    chatArea.appendChild(div);
}