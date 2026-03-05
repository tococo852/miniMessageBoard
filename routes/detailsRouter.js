const {Router} = require("express")
const detailsRouter= Router()
const messages = require('../messages')
detailsRouter.get('/', (req,res)=>{
    res.send("missing the id!")
})
detailsRouter.get('/:messageId', (req,res)=>{
    const message=messages[Number(req.params.messageId)]
    res.render('details',{message})
})

module.exports=detailsRouter