const express = require("express")
const app= express()
const indexRouter= require("./routes/indexRoutes")
const newMessageRouter=require("./routes/newMessagesRoutes")
app.use("/", indexRouter )
app.use("/new",newMessageRouter)

const PORT = 3000

app.listen (PORT, (error)=>{
    if (error){
        throw error
    }
    console.log(`App running on port ${PORT}`)
})

app.use ((err,req,res,next)=>{
    console.error(err)
    res.status(err.statusCode || 500).send(err.mesage)
})