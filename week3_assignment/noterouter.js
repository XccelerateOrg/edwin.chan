const path = require('path')
const express = require('express')
const router = express.Router()
let fs = require('fs')

let {read,write,update,remove} = require('./noteservice')


let fileL = path.join(__dirname, "public/store.json")
let index
let contents
let notes
const USERNOTE = function (name){
    this.name=name
    this.text=[]
}

router.get('/',(req, res) => {
    let user = new USERNOTE(req.auth.user)
    read(user.name).then(notes=>{
        user.text=notes[user.name]
        res.render("home",user)
    })
    
})


router.post('/',(req, res) => {
    let user = new USERNOTE(req.auth.user)
    read(user.name)
        .then(notes => {
            notes[req.auth.user].push(req.body.text)
            // console.log(req.body.text)
            write(user.name, req.body.text)
            .then(notes => {
                // console.log(Object.keys(notes))
                user.text=notes[Object.keys(notes)[0]]
                res.render("home",user)
            })
        })

})

router.put('/',(req,res)=>{
    let user = new USERNOTE(req.auth.user)
    index = req.body.data.index
    contents = req.body.data.value
    let id = parseFloat(index)+1
    read(user.name).then(notes=>{
             notes[req.auth.user][index]= contents
            //  console.log(typeof(index))
            //  console.log(notes)
            update(user.name,id,contents).then(notes=>{
                console.log(notes)
        res.json(notes)
    })
    })

})

router.delete('/',(req,res)=>{
    let user = new USERNOTE(req.auth.user)
     index = req.body.index
     let id = parseFloat(index)+1
    read(user.name).then(notes =>{
        notes[req.auth.user].splice(index,1)
console.log(notes)
remove(user.name,id) .then(index => res.json(index))
    //     new Promise((resolve,reject)=>{
    //         fs.writeFile(fileL,JSON.stringify(notes),(err)=>{
    //             resolve(index)
    //             if(err){
    //                 reject(err)
    //             }
    //         })
    // })
    
   
})})

module.exports = router