let express = require("express")
let app = express()

let path = require("path")

let basicAuth = require('express-basic-auth')

let fs = require('fs')
let bodyParser = require("body-parser")
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonParser)
app.use(urlencodedParser)

let notes = new Object()
let fileL = path.join(__dirname, "public/store.json")
let index
let contents

// app.use(basicAuth({
//     authorizer: myAsyncAuthorizer,
//     authorizeAsync: true,
//     challenge:true,
// }))
 
// function myAsyncAuthorizer(username, password, cb) {
//     if (username.startsWith('A') & password.startsWith('secret'))
//         return cb(null, true)
//     else
//         return cb(null, false)
// }

app.use(basicAuth({
    authorizer:myAsyncAuthorizer,
    authorizeAsync:true,
    challenge:true
}))

function myAsyncAuthorizer(userN,password,cb){
    const usersJ =  fs.readFileSync(__dirname+"/public/users.json",'utf-8',async(err,data)=>{
            if(err){
                throw err
            }
            return await data
        })
    
    let parsed = JSON.parse(usersJ)
    // console.log(parsed)
    // let userN='me'
        // let user = parsed.users.find(user=>user.username===userN)
        let user = parsed.users[3]
        // console.log(user)
        
        const userMatches = basicAuth.safeCompare(userN,user.username)
        const passwordMatches = basicAuth.safeCompare(password,user.password)
        if (userMatches & passwordMatches)
        return cb(null, true)
      else
        return cb(null, false)
}

let hbs = require("express-handlebars")
app.engine("handlebars", hbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.use(express.static(__dirname +"/public"))

const USERNOTE = function (name){
    this.name=name
    this.text=[]
}

app.get('/', (req, res) => {
    let user = new USERNOTE(req.auth.user)
    console.log(user.name)
    read(fileL,user).then(notes=>{
        user.text=notes[Object.keys(notes)[0]]
        console.log(user)
        res.render("home",user)
    })
})

app.post('/', jsonParser, (req, res) => {
    let user = new USERNOTE(req.auth.user)
    read(fileL,user)
        .then(notes => {
            notes[req.auth.user].push(req.body.text)
            write(fileL, notes)
            .then(notes => {
                user.text=notes[Object.keys(notes)[0]]
                res.render("home",user)
            })
        })

})

app.put('/',(req,res)=>{
    index = req.body.data.index
    contents = req.body.data.value
    console.log(index)
    read(fileL).then(notes=>{
             notes[req.auth.user][index]= contents
            write(fileL,notes).then(notes=>{
        res.json(notes)
    })
    })

})
app.delete('/',(req,res)=>{
     index = req.body.index
    read(fileL).then(notes =>{
        notes[req.auth.user].splice(index,1)
console.log(notes)
        new Promise((resolve,reject)=>{
            fs.writeFile(fileL,JSON.stringify(notes),(err)=>{
                resolve(index)
                if(err){
                    reject(err)
                }
            })
    }).then(index => res.json(index))
})})

app.listen(8000, () => {
    console.log(__dirname +"/public")
})


function read(fileL,user) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileL,'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            if(data){
            notes = JSON.parse(data)}
            else{
                notes = Object.fromEntries([Object.values(user)])
            }
            resolve(notes)
        })
    })
}
function write(fileL, notes) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileL, JSON.stringify(notes), (err) => {
            if (err) {
                return reject(err);
            }
            resolve(notes);
        });
    })
}

