var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.get("/",function(req,res){
  res.sendFile(__dirname +"/exD.html")
})
app.post("/api/message",urlencodedParser,function(req,res){
  console.log(req.body)
  res.send(req.body)
})

app.listen(8080)