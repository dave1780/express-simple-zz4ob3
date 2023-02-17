const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const api= require("./Api.js")

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});
 app.get('/about',(req,res)=>{
  res.sendFile(path.resolve('pages/about.html'))
})
api.getMenu()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
