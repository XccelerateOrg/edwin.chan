require('dotenv').config()

const express = require('express')
const app = express()
const config = require('./knexfile')['development']
const knex = require('knex')(config)
let port = process.env.PORT || 4000

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get('/api/links',async(req,res)=>{
    let result = await knex('links').select('*')
    res.json(result)
})

app.post('/api/addLink',async(req,res)=>{
    console.log(req.body)
    let {id,name,url,tags} = req.body
    let result = await knex('links').insert({id,name,url,tags})
    res.json({ success: true, message: 'ok' })
})

app.listen(port,()=>{
    console.log('hearing ' + port )
})