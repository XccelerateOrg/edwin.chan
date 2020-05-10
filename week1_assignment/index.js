let express = require("express")
let app = express()
app.use('/upload', express.static("upload"))

let bodyParser = require("body-parser")
let jsonParser = bodyParser.json()
let urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonParser)
app.use(urlencodedParser)

let fileUpload = require("express-fileupload")
app.use(fileUpload({
    createParentPath: true
}))

let path = require("path")
let fs = require("fs")

let caches = new Object();


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html")
})

app.post('/upload', function (req, res) {
    let file = req.files.fileU
    if (file == null) {
        return res.status(400).send('No files were uploaded.')
    }
    else {
        new Promise(function (resolve, reject) {
            fs.writeFile(path.join(__dirname, "upload", file.name), file.data, function (err) {
                if (err) {
                    reject( err)
                }
            })
            resolve(file.name)
        }).then(function (name) {
            new Promise(function (resolve, reject) {
                fs.readFile(path.join(__dirname, "upload", name), function (err, data) {
                    if (err) {
                        reject(err)
                    }
                    resolve(data)
                })
            })
                .then(function (data) {
                    caches[file.name] = data
                })
                res.status(204).send()
        })
    }
})


app.get('/upload/:id', function (req, res) {
  fs.readFile(path.join(__dirname,"upload",req.params.id),"utf-8",function(err,data){
      if(err){
          throw err
      } else{
          res.send(data)
      }
  })      
})

app.listen(8000)