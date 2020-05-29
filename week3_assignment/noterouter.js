const path = require('path')
const express = require('express')
const router = express.Router()
let fs = require('fs')

let {read,write,update,remove} = require('./noteservice')


let fileL = path.join(__dirname, "public/store.json")
let index
let textId
let text

const USERNOTE = function (name){
    this.name=name
    this.text=[]
}


router.get('/',(req, res) => {
    // console.log(req)
    let user = new USERNOTE(req.auth.user)
    read(user.name).then(notes=>{
        user.text=notes
        console.log(user)
        res.render("home",user)
    })
    
})


router.post('/',(req, res) => {
    let user = new USERNOTE(req.auth.user)
    read(user.name)
        .then(notes => {
            console.log(req.body.text)
            write(user.name, req.body.text)
            .then(notes => {
                user.text=notes
                res.render("home",user)
            })
        })

})

router.put('/',(req,res)=>{
    let user = new USERNOTE(req.auth.user)
    console.log(req.body)
    textId = parseFloat(req.body.data.id)
    text = req.body.data.value

     update(user.name,textId,text).then(notes=>{
             console.log(notes)
                   res.json(notes)
    })
})

router.delete('/',(req,res)=>{
    let user = new USERNOTE(req.auth.user)
    console.log(req.body)
    textId = parseFloat(req.body.id)

remove(user.name,textId) .then(i =>{ 
    console.log(i)
    res.json(i)
    //     new Promise((resolve,reject)=>{
    //         fs.writeFile(fileL,JSON.stringify(notes),(err)=>{
    //             resolve(index)
    //             if(err){
    //                 reject(err)
    //             }
    //         })
    // })
    
   
})
})
module.exports = router