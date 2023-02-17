const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});
const getData = ()=>{ app.get('/about',(req,res)=>{
  res.sendFile(path.resolve('pages/about.html'))
})}
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
module.exports= getData;