const express =require("express")
const Router = express.Router()
 
Router.get("/menu",(req,res,next)=>{
    res.end("you are on menu page")
    next();
  });
  Router.get("/syop",(req,res,next)=>{
    res.end("you are on syop")
    next();
  })


module.exports= Router