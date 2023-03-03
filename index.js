const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const fs =require("fs")
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});
 app.get('/about',(req,res)=>{
  res.sendFile(path.resolve('pages/about.html'))
})
app.get("/menu/:name",(req,res)=>{
  const name= req.params.name.toUpperCase();
  if(name==="BLOG"){
   res.sendFile(path.resolve('./package.json'))
  }
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
