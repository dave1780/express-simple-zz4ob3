const express = require('express');
const Router = express.Router();
const path = require('path');
const bodyParser=require("body-parser")
Router.get('/Signup', (req, res) => {
  res.sendFile(path.resolve('pages/Signup.html'));

});
Router.use("/Signup",bodyParser.urlencoded({extended:true}))
Router.post('/Signup', (req, res) => {
  console.log(req.body.username);
  
});
Router.get('/',(req,res)=>{
  res.sendFile(path.resolve("pages/index.html"))
})

module.exports = Router;
