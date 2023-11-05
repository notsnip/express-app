const express = require('express')
const app= express()

require("./db/connection") // Connection to MongoDB


// Port (Locally, defaults to 7777)
const port= process.env.PORT || 7777

app.get('/',(req,res)=>{
    res.send("How many developers does it take to screw in a lightbulb? None. It’s a hardware problem.")
})



app.listen(port, ()=>{
    console.log("App listening on http://localhost:"+ port)
})