const express =require("express")
const Router = express.Router()
 
Router.get("/menu",(req,res,next)=>{
    res.end("you are on menu page")
    next();
  });
  Router.get("/syop",(req,res,next)=>{
    res.end("you are on syop")
    next();
  });

  Router.get("/Signup",(req,res,next)=>{
    res.end(path.resolve("pages/Signup.html"))
  })


module.exports= Router