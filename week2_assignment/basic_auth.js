

let basicAuth = require('express-basic-auth')

let fs = require('fs')




function myAsyncAuthorizer(userN,password,cb){
    const usersJ =  fs.readFileSync(__dirname+"/public/users.json",'utf-8',async(err,data)=>{
            if(err){
                throw err
            }
            return await data
        })
    
    let parsed = JSON.parse(usersJ)
    
    // let userN='me'
        // let user = parsed.users.find(user=>user.username===userN)
        let user = parsed.users
        for( let row of user){
        const userMatches = basicAuth.safeCompare(userN,row.username)
        const passwordMatches = basicAuth.safeCompare(password,row.password)
        if (userMatches & passwordMatches)
        return cb(null, true)
      else
        return cb(null, false)
        }
}

let BASICAUTH = basicAuth({
    authorizer:myAsyncAuthorizer,
    authorizeAsync: true,
    challenge:true,
})

module.exports = BASICAUTH