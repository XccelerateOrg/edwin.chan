let express = require("express")
let app = express()
let bodyParser = require("body-parser")

let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })

let BasicAuth = require('./basic_auth')
let router = require('./noterouter')


let hbs = require("express-handlebars")
app.engine("handlebars", hbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")


app.use(BasicAuth)
app.use(jsonParser)
app.use(urlencodedParser)
app.use(express.static(__dirname +"/public"))
app.use('/',router)


app.listen(8000, () => {
    console.log(__dirname +"/public")
})



