const Events = require("events")
let player = require("./playerInput")
let computer = require("./computer")

class Referee extends Events {
    constructor() {
        super();
    }
    receive = () => {
        this.emit("input", player.input,computer.input)
    }
}
let arr = ['rock','paper','scissor']


let referee = new Referee()

    referee.on("input", function (pl,com) {
        (pl===arr[2]&&com===arr[1]||pl===arr[1]&&com===arr[0]||pl===arr[0]&&com===arr[2])?
        console.log("player win"):(pl===com)?console.log("draw"):console.log("computer win")
    })


console.log(referee.receive())
