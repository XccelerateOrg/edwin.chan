let http = require("http")
let fs = require("fs")

http.createServer(function(req,res){
    if(req.url === "/"){
    fs.createReadStream(__dirname + "/flowerShop/ExB.html").pipe(res)
    }
    else if(req.url === '/img/flower-icon.png') {
        fs.createReadStream(__dirname + '/flowerShop/img/flower-icon.png').pipe(res);}
    else if(req.url ===  '/ExB.css') {
        fs.createReadStream(__dirname + '/flowerShop/ExB.css').pipe(res);}
    else if(req.url ===  '/img/logo.png') {
        fs.createReadStream(__dirname + '/flowerShop/img/logo.png').pipe(res);}
    else if(req.url ===  '/img/payment-icon.png') {
        fs.createReadStream(__dirname + '/flowerShop/img/payment-icon.png').pipe(res);}
    else if(req.url ===  '/img/phone-icon.png') {
        fs.createReadStream(__dirname + '/flowerShop/img/phone-icon.png').pipe(res);}
    else if(req.url ===  '/img/truck-icon.png') {
        fs.createReadStream(__dirname + '/flowerShop/img/truck-icon.png').pipe(res);}
    else if(req.url ===  '/img/flowershop.jpg') {
        fs.createReadStream(__dirname + '/flowerShop/img/flowershop.jpg').pipe(res);}
    else if(req.url ===  '/img/') {
        fs.createReadStream(__dirname + '/flowerShop/img/').pipe(res);}
        else {
            res.writeHead(404);
            res.end();
        }
}).listen(8080,'127.0.0.1')