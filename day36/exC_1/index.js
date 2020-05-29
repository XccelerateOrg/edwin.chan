const express = require('express')
const app = express()

const redis = require('redis')
const client = redis.createClient({port:6379})

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/',(req,res)=>{
    client.lpush('exerciseC',req.body.data,(err,data)=>{
        if(err){
            console.log(err)
        }
        
            res.send(data)
        })
    })

app.listen(8000,()=>{
    console.log('connect to 8000')
})