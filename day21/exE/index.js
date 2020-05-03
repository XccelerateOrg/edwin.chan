let Events = require("events")
let utils = require("./timer.utils")


class Timer extends Events{
    constructor(){
        super()
    }
    start(sec){
        this.emit("start",sec)
    }
    pause(){
        this.emit("pause")
    }
    stop(){
        this.emit("stop")
    }
}

let timer = new Timer()

timer.on("start",utils.start)
timer.on("pause",utils.pause)
timer.on("stop",utils.stop)

timer.start(6)
setTimeout(()=>timer.pause(),3000)
setTimeout(()=>timer.start(),4000)
setTimeout(()=>timer.stop(),5000)