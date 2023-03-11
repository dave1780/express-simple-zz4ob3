const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const shop =require("./Api.js")
const Router =require("./routes.js")

app.use(express.json())
app.use(express.static('static'));

app.get("/",(req,res)=>{
  res.sendFile(path.resolve("pages/Signup.html"))
})

app.post("/Signup",(req,res)=>{
  console.log(req.body.username)
  res.end("welcome to signup page")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
