require('dotenv').config()
const express = require('express')
const app = express()
const port = 8000 || process.env.port
const hbs = require('express-handlebars')
const bcrypt = require('bcrypt')
const passport = require('passport')
const initialize = require('./passport')
const session = require('express-session')
let users = [
    { id: 1, email: 'tom@tom.com', password: 'tom' },
    { id: 2, email: 'peter@peter.com', password: 'peter' },
]
// app.use(bodyParser.json())



app.engine('handlebars', hbs({
    defaultLayout: 'main'
}))

app.set('view engine', 'handlebars')



app.get('/about', (req, res) => {
    res.render('about', { title: 'about' })
})

app.get('/login', (req, res) => {
    res.render('login', { title: 'login' })
})
app.post('/login', (req,res)=>{

})


app.listen(port, () => {
    console.log('welcome to port 8000')
})