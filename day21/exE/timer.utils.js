// let ticking = require("./timer")
let pausing = false
let stopping = false

const ticking = function (sec){
    let counter = setInterval(function () {
        if (sec > 0 && !pausing) {
            console.log(`Time remaining ${sec}`)
            sec -= 1
        }        
        else if(stopping){
            clearInterval(counter)
        }
        else if(sec===0){
            clearInterval(counter)
            console.log(`kaboom`)
        }
    }, 1000)
}

const start = function (sec) {
    if (!pausing) {
        ticking(sec)
    } else { 
        pausing = false }
}

const pause = function () {
    pausing = true
}

const stop = function () {
    stopping = true
}

module.exports.start = start
module.exports.pause = pause
module.exports.stop = stop