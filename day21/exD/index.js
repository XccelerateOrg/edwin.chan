let Events = require("events")
let ticking = require("./timer")


class Timer extends Events{
    constructor(){
        super()
    }
    count(sec){
        this.emit("tick",sec)
    }
}

let timer = new Timer()

timer.on("tick",ticking)

timer.count(4)