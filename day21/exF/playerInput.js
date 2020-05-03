const Events = require("events")

class Player extends Events {
    constructor(input) {
        super();
        this.input=input
    }
    receive = () => {
        this.emit("input", this.input)
    }

}


let player = new Player("rock")

player.on("input", function () {
        console.log(`The player input has been received.`)
    })


module.exports = player

