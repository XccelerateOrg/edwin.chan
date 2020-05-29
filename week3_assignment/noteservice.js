let fs = require('fs')
const config = require('./knexfile')['development']
const knex = require('knex')(config)
let notes = new Object()


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
        let userArray = await knex('data').select('text_data').join('users', 'data.user_id', 'users.id').where('users.name', user).orderBy('data.id')
        let userData = userArray.map(obj => obj.text_data)
        notes[user] = userData
        return notes
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
        let userData = userArray.map(obj => obj.text_data)
        notes[user] = userData
        // console.log(notes)
        return notes
    }
    catch (err) {
        console.log(err)
    }
}

let update = async function (user,id,text) {
    // let userArray = await knex('data').select('text_data').innerJoin('users', 'data.user_id', 'users.id').where('name', user).orderBy('data.id')
    // let userData = userArray.map(obj => obj.text_data)
    // notes[user] = userData
    // console.log(notes)
    // const subquery = knex('users').select('id').where('name', user)
    console.log(id)
    let c2 = await knex('data').count('* as cnt').innerJoin('users','data.user_id', 'users.id').where('users.name',user)
    console.log(c2)
    await knex('data').update('text_data',text).from(c2).where('c2.rn',id)
    let userArray = await knex('data').select('text_data').innerJoin('users', 'data.user_id', 'users.id').where('name', user).orderBy('data.id')
    let userData = userArray.map(obj => obj.text_data)
    notes[user] = userData
    console.log(notes)
    return notes

}

let remove = async function (user,id) {
    console.log(id)
    console.log(user)
    await knex('data').innerJoin('users','data.user_id','users.id').where('data.id',id).del()

    return id-1
}

// remove(5)
// update('123',1,'realsuck')
// write('me','hahahah')

module.exports = { read, write, update,remove }