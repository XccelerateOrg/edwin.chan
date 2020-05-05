let fs = require("fs")

function copy (fileLocation){
    let read = fs.createReadStream(fileLocation)
    let write =fs.createWriteStream(__dirname +'/copyfile/'+ fileLocation.split("/").pop())
    read.on("data",function(chunk){
        write.write(chunk)
    })
}

copy(__dirname + '/text.txt')
copy(__dirname + '/textcopy.txt')

