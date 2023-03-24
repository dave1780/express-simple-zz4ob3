const express=require("express")
const Router=express.Router();
const path=require("path")
Router.get("/",(req,res)=>{
  res.sendFile(path.resolve("pages/index.html"))
});

module.exports=Router;