const express =require("express")
const Router = express.Router()
const routes =()=>{
  
  const menuRoute= Router.get("/menu",(req,res,next)=>{
    res.end("you are on menu page")
    next();
  });
  const syop= Router.get("/syop",(req,res,next)=>{
    res.end("you are on syop")
    next();
  })
}
routes();
module.exports={routes}