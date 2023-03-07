const express =require("express")
const Router = express.Router()
 const path=require("path")
Router.get("/menu",(req,res,next)=>{
    res.end("you are on menu page")
    next();
  });
  Router.get("/syop",(req,res,next)=>{
    res.end("you are on syop")
    next();
  });

  Router.get("/Signup",(req,res,next)=>{
    res.sendFile(path.resolve("pages/Signup.html"))
  })


module.exports= Router