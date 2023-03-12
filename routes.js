const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get('/Signup', (req, res) => {
  res.sendFile(path.resolve('pages/Signup.html'));

});
Router.post('/Signup', (req, res) => {
  console.log(req.body);
  
});
Router.get('/',(req,res)=>{
  res.sendFile(path.resolve("pages/index.html"))
})

module.exports = Router;
