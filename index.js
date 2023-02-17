const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/home', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});
app.get('/about',(req,res)=>{
  res.send("we are on about page")
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
