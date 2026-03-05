

const {Router} = require("express")
const indexRouter= Router()
const messages = require('../messages')
indexRouter.get ("/",(req,res)=>{
    res.render('messages', {messages:messages})
    //res.send("welcome to the index page")
} )

module.exports= indexRouter