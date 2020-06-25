const passport = require('passport')
const localStrategy = require('passport-local').Strategy
const config = require('./knexfile')['development']
const knex = require('knex')(config)
const router = express.router()
const hbs = require('express-handlebars')
const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.engine('handlebars',hbs({defaultLayout:'main'}))
app.set('view engine','handlebars')

function checkAuth (req,res,next){
    if(req.isAuthenticated()){
        next();
    }
    res.render('login',{title:'login',message:'invalid user'})
}



passport.use('local-login',new localStrategy(
    async (email, password, done) => {
        try {
            let user = await knex('users').where('email', email)
            if (user.length == 0 || user[0].password !== password) {
                return done(null, false, { message: 'incorrect credentials' })
            }
            if (user[0].password === password) {
                return done(null, user);
            }
        }
        catch (err) {
            return done(err)
        }

    }))

passport.serializeUser((user,done)=>{
    return done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    let users = await knex('users').where('id',id)
    if(users.length ==0){
        return done(new Error(`Wrong user id ${id}`));
    }
    user = users[0]
    return done(null,user)
})
// app.get('/login',passport.authenticate('local'))


