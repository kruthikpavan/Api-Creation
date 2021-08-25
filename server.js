const express = require('express');
const app= express()
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require("dotenv/config")

//middleware
app.use(bodyParser.json())
app.use(cors());

//import routes
const postsRoute= require("./routes/posts")

app.use("/posts",postsRoute)
 
//Routes
app.get("/",(req,res)=>{
    res.send("we are on home")
})


//connect to database
mongoose.connect(process.env.DB_CONNECTION,()=>{
    console.log("connected to db");
})




//listen
app.listen(3000,()=>{
    console.log("listening to server");
})