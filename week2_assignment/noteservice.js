let fs = require('fs')

let notes = new Object()

let read = function (fileL,user) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileL,'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            if(data){
                let user_text = JSON.parse(data)
                notes[user.name]=user_text[user.name]
                console.log(notes)
            }
            
            else{
                notes = Object.fromEntries([Object.values(user)])
            }
            resolve(notes)
        })
    })
}

let write = function (fileL, notes) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileL, JSON.stringify(notes), (err) => {
            if (err) {
                return reject(err);
            }
            resolve(notes);
        });
    })
}

module.exports ={read,write}