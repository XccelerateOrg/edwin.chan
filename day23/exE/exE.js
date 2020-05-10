var express = require('express')
var bodyParser = require('body-parser')
var app = express()

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended:false})

app.get("/",function(req,res){
  res.sendFile(__dirname +"/exE.html")
})
app.get("/arr/:arr",function(req,res){
  console.log(req.params.arr)
  res.sendFile(__dirname +"/exE.html")
})
app.post("/",urlencodedParser,function(req,res){
let sum = {"sum":req.body.arr.split("").map(x=>Number(x)).reduce((a, b) => a + b, 0)}
// let sum 
// for(i=0;i<arr1.length;i++){
//   sum +=arr1[i]
// }
res.send(sum)
})

app.listen(8080)