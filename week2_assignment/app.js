let express = require("express")
let app = express()

let basicAuth = require('./basic_auth')

let bodyParser = require("body-parser")
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

let path = require("path")

let hbs = require("express-handlebars")
app.engine("handlebars", hbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

let {read,write} = require('./noteservice')

app.use(basicAuth)
app.use(jsonParser)
app.use(urlencodedParser)

app.use(express.static(__dirname +"/public"))
let fileL = path.join(__dirname, "public/store.json")
let index
let contents

const USERNOTE = function (name){
    this.name=name
    this.text=[]
}

app.get('/', (req, res) => {
    let user = new USERNOTE(req.auth.user)
    read(fileL,user).then(notes=>{
        user.text=notes[user.name]
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
    let user = new USERNOTE(req.auth.user)
    index = req.body.data.index
    contents = req.body.data.value
    console.log(index)
    read(fileL,user).then(notes=>{
             notes[req.auth.user][index]= contents
            write(fileL,notes).then(notes=>{
        res.json(notes)
    })
    })

})
app.delete('/',(req,res)=>{
     index = req.body.index
    read(fileL,user).then(notes =>{
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



