
const bodyParser=require("body-parser")
const express = require("express")
const Router= express.Router( );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

 Router.post("/Signup",(req,res)=>{
  console.log(req.body)
})
module.exports= Router;