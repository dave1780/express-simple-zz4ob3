const express= require("express")
const app= express.Router()
const getMenu= ()=>{
  app.get("/shop",(req,res)=>{
  res.send("we are on shop")
})}

module.exports= getMenu
