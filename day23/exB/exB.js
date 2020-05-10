let express = require("express")
let app = express();
let fs = require("fs")

app.use("/img",express.static("flowerShop/img"))
app.get("/ExB.css",function(req,res){
    fs.createReadStream(__dirname + '/flowerShop/ExB.css').pipe(res);
})

app.get("/",function(req,res){
    fs.createReadStream(__dirname + "/flowerShop/ExB.html").pipe(res)
})

app.listen(8080)