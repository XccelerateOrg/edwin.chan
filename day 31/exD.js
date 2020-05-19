let pg = require('pg')

let config = {
    user:'anotherone',
    database:'fruits',
    password:'1234',
    host:'localhost',
    port:5432,
    max:10,
    idleTimeoutMillis: 30000,
}

let client = new pg.Client(config);

client.connect()

client.query("SELECT * FROM citrus WHERE color='orange'",(err,results)=>{
    if(err){
        console.log(err)
    }
    console.log(results.rows);

})