const express= require("express")
const app=express()
const getMenu= ()=>{app.get("/shop",(req,res)=>{
  res.send("we are on shop")
})}
getMenu()
module.exports= {getMenu};
