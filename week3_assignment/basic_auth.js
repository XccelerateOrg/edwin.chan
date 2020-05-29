

let basicAuth = require('express-basic-auth')
const config = require('./knexfile')['development']
const knex = require('knex')(config)
let fs = require('fs')

async function myAsyncAuthorizer(userN,password,cb){
    // const usersJ =  fs.readFileSync(__dirname+"/public/users.json",'utf-8',async(err,data)=>{
    //         if(err){
    //             throw err
    //         }
    //         return await data
    //     })
        
    // let parsed = JSON.parse(usersJ)

        // let user = parsed.users
let user = await knex('users').column(['name','password'])

        for( let row of user){
        const userMatches = basicAuth.safeCompare(userN,row.name)
        const passwordMatches = basicAuth.safeCompare(password,row.password)
        if (userMatches & passwordMatches)
        return cb(null, true)
      else
        return cb(null, false)
        }
}

let BasicAuth = basicAuth({
    authorizer:myAsyncAuthorizer,
    authorizeAsync: true,
    challenge:true,
})

module.exports = BasicAuth


// comparer('me')

// async function comparer (name,password){
//     let userN = await knex('users').column(['name','password'])
//     console.log(userN)

// }