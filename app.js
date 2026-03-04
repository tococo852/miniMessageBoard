const express = require("express")
const app= express()

app.get("/", (req,res)=>{
    res.send("hello world")
})

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