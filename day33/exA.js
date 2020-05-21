const knex = require('knex')({
    client:'postgresql',
    connection:{
        database:'fruits',
        user:'anotherone',
        password:'1234',
    }
})

// let query = knex.insert({name:'apple',color:'green',taste:'sweet'},'name').into('citrus_stock').transacting(trx)

// console.log(query)


// knex.transaction(function(trx) {

knex.select('*').from('stock').innerJoin('citrus','stock.citrus_id','citrus.id').then(x=>console.log(x))
