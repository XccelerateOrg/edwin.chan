const express = require('express')
const app = express()

const redis = require('redis')
const client = redis.createClient({port:6379})

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

setInterval(() => {
    client.lpop('exerciseC',(err,reply)=>{
        if(err){
            console.log(err)
        }
        if(reply){console.log(`poped item '${reply}' 
        searching for another`)}
        else {console.log('there is nothing left')}
    })
}, 5000)

app.post('/',(req,res)=>{
    client.lpush('exerciseC',req.body.data,(err,data)=>{
        if(err){
            console.log(err)
        }
        console.log(`new item arrived '${req.body.data}'`)
        console.log(data)
        res.send(req.body.data)
    })
})

app.listen(8000,()=>{
    console.log('connect to 8000')
})