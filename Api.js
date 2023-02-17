const express= require("express")
const app=express()
const getMenu= ()=>{app.get("/menu",(req,res)=>{
  res.send("we are on menu")
})}
module.exports= getMenu;
