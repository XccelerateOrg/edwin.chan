const passport = require('passport')
const localStrategy = require('passport-local').Strategy;
const config = require('./knexfile')['development']
const knex = require('knex')(config)

module.exports = (app) => {
    app.use(passport.initialize())
    app.use(passport.session())

    passport.use('local-login', new localStrategy(
        async (email, password, done) => {
            try {
                let users = await knex('users').where('email', email)
                console.log(users)
                if (users.length == 0) {
                    return done(null, false, { message: 'Incorrect credentials.' });
                }
                let user = users[0];
                if (user.password === password) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Incorrect credentials.' });
                }
            }
            catch (err) {
                return done(err);
            }

        }

    ))
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        let users = await knex('users').where({id:id});
        if (users.length == 0) {
            return done(new Error(`Wrong user id ${id}`));
        }
        let user = users[0];
        return done(null, user);
    });
}