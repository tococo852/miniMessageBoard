const Router= require("express")
const newMessageRouter=Router()
const messages = require('../messages')

newMessageRouter.get("/", (req,res)=>{
    res.render('newMessage')
})

newMessageRouter.post('/', (req,res)=>{
    messages.push({
        user:req.body.name,
        text:req.body.message,
        added:new Date()
    })
    res.redirect('/')
})

module.exports=newMessageRouter