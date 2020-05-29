let fs = require('fs')
const config = require('./knexfile')['development']
const knex = require('knex')(config)


let read = async function (user) {
    // return new Promise((resolve, reject) => {
    //     fs.readFile(fileL,'utf8', (err, data) => {
    //         if (err) {
    //             reject(err)
    //         }
    //         if(data){
    //             let user_text = JSON.parse(data)
    //             notes[user.name]=user_text[user.name]
    //             console.log(notes)
    //         }

    //         else{
    //             notes = Object.fromEntries([Object.values(user)])
    //         }
    //         resolve(notes)
    //     })
    // })
    try {
        // console.log(user)
        let userArray = await knex('data').select('text_data','data.id').join('users', 'data.user_id', 'users.id').where('users.name', user).orderBy('data.id')
        console.log(userArray)

        return userArray
    }
    catch (err) {
        console.log(err)
    }
}


let write = async function (user, text) {
    // return new Promise((resolve, reject) => {
    //     fs.writeFile(fileL, JSON.stringify(notes), (err) => {
    //         if (err) {
    //             return reject(err);
    //         }
    //         resolve(notes);
    //     });
    // })
    try {
        const subquery = knex('users').select('id').where('name', user)
        await knex('data').insert({ 'user_id': subquery, 'text_data': text }).whereIn('data.user_id', subquery)
        let userArray = await knex('data').select('text_data').innerJoin('users', 'data.user_id', 'users.id').where('name', user).orderBy('data.id')
        // console.log(notes)
        return userArray
    }
    catch (err) {
        console.log(err)
    }
}

let update = async function (user,textId,text) {
    // let userArray = await knex('data').select('text_data').innerJoin('users', 'data.user_id', 'users.id').where('name', user).orderBy('data.id')
    // let userData = userArray.map(obj => obj.text_data)
    // notes[user] = userData
    // console.log(notes)
    // const subquery = knex('users').select('id').where('name', user)
    console.log(textId)
    await knex('data').update('text_data',text).where('id',textId)
    let userArray = await knex('data').select('text_data').innerJoin('users', 'data.user_id', 'users.id').where('name', user).orderBy('data.id')
    return userArray

}

let remove = async function (user,textId) {
    console.log(textId)
    console.log(user)
    await knex('data').where('data.id',textId).del()

    return textId
}


module.exports = { read, write, update,remove }