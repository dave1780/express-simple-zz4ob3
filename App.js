const express =require("express")
const app= express()
const bodyParser= require("body-parser")
const path=require("path")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("static"))

app.get("/Signup",(req,res)=>{
res.sendFile(path.resolve("pages/Signup.js"))
})
app.post("/Signup",(req,res)=>{
  console.log(req.body.username)
})
app.get("/",(req,res)=>{
  res.sendFile(path.resolve("pages/index.html"))
})

app.listen(3010,()=>{
console.log("listening on port 3010")
})