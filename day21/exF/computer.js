let player = require("./playerInput")
const Events = require("events")

class Computer extends Events {
    constructor() {
        super();
        this.input=['rock','paper','scissor'][Math.floor(Math.random() * 3)]
    }
    receive = () => {
        this.emit("input", this.input)
    }
}


let computer = new Computer()

    computer.on("input", function () {
        if(player.input){
        console.log(`The computer input has been received.`)}
    })


module.exports =  computer
