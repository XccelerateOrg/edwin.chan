 ranNum = require("./first")
 toLetter = require("./second")


let ranStr = function(d){
    let arr = [] 
    let str 
for(i=0;i<d;i++){
    arr.push(toLetter(ranNum()))
    str = arr.join('')
}
    console.log(str)

}

module.exports = ranStr