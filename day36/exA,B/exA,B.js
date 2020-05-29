// exA
// lpush shoppingList 'a' 'n' 'rt' 'r' 'p' 'e' 's' 'd' 
// sort shoppingList alpha

//exB
let redis =require('redis')

let client = redis.createClient({
    host:'localhost',
    port:6379
})

client.on('error',(err)=>{
    console.log(err)
})

client.del('shoppinList',(err,data)=>{
    if(err){
        console.log(err)
    }
})
client.lpush('shoppingList','a','d','c','y','j','i','o','j',(err,data)=>{
    if(err){
        console.log(err)
    }
    client.sort('shoppingList','ALPHA',(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(data)
    })

})