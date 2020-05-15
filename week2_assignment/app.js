let express = require("express")
let app = express()

let path = require("path")

let fs = require('fs')
let bodyParser = require("body-parser")
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonParser)
app.use(urlencodedParser)

let notes = {}
let note = new Array()
let fileL = path.join(__dirname, "public/store.json")

let hbs = require("express-handlebars")
app.engine("handlebars", hbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

app.get('/', (req, res) => {
    res.render("home")
})

app.post('/', jsonParser, (req, res) => {
    read(fileL,req)
        .then(note => {
            write(fileL, note)
            .then(notes => {
                rres.render("home",notes)
            })
        })

})

app.listen(8000, () => {
    console.log("hearing port 8000")
})


function read(fileL,req) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileL,'utf8', (err, data) => {
            if (err) {
                reject(err)
            }
            if(data){
            note=JSON.parse(data).user
            console.log(data)
            note.push(req.body.text)
            }
            notes.user=note
            console.log(notes)
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