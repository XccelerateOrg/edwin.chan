const config = require('./knexfile')['development']
const knex = require('knex')(config)


const test = async(email,password,done)=>{
        let user = await knex('users').where('email',email)
        console.log(user)
}

test('tom@tom.com')