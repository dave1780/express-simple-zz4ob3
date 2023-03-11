const fs = require("fs")
const bodyParser=require("body-parser")
const express = require("express")
const app= express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}))

 const signup = app.post("/Signup",(req,res)=>{
  console.log(req.body)
})
module.exports= signup;