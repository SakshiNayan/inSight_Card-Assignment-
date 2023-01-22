const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
require("dotenv").config();

const app = express()
app.use(cors())
//body -parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const userControl = require('./Routes/log-reg')
app.use("/user", userControl)


//mongoDb conection
mongoose.connect("mongodb://localhost/Insight-card",(data)=>{
    console.log("Successfully connect to db")
},(err)=>{
    console.log(err)
});

app.listen(process.env.PORT || 3000,(err)=>{
    if(!err){
        console.log("Server connected succesfully at 3000")
    }
    else{
        console.log(err)
    }
});

app.get("/",function(req,res){
    res.send("Insight Card Page")
})


