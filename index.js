const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const shop =require("./Api.js")
const Router =require("./routes.js")
app.use(express.static('static'));


app.use("/",Router)
app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});
app.post("/re",(req,res)=>{
  console.log(res)
  res.redirect("/about")
})
 app.get('/about',(req,res)=>{
  res.sendFile(path.resolve('pages/about.html'))
})

app.use("/shop",shop);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
