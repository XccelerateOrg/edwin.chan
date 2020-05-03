const ticking = function (sec){
    let counter = setInterval(function () {
        if (sec > 0 ) {
            console.log(`Time remaining ${sec}`)
            sec -= 1
        }
        else if(sec===0){
            clearInterval(counter)
            console.log(`kaboom`)
        }
    }, 1000)
}

module.exports = ticking