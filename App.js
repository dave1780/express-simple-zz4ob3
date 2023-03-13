const express =require("express")
const app= express()
const bodyParser= require("body-parser")
const path=require("path")
const jwt =require("jsonwebtoken")
const CryptoJS= require("crypto-js")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("static"))

app.get("/Signup",(req,res)=>{
res.sendFile(path.resolve("pages/Signup.html"))
})
app.post("/Signup",(req,res)=>{
  const data= {
    username:req.body.username , 
    email:req.body.email,
    password : req.body.password
  }
  console.log(data)
  const newData=JSON.stringify(data)
  const cipherData= CryptoJS.AES.encrypt(newData,"@#+×%")
  //const token = jwt.sign({data:data},'hdido');
  console.log(cipherData)
})
app.get("/",(req,res)=>{
  res.sendFile(path.resolve("pages/index.html"))
})

app.listen(3010,()=>{
console.log("listening on port 3010")
})