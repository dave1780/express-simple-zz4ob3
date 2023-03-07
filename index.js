const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const shop =require("./Api.js")
const Router =require("./routes.js")
app.use(express.static('static'));
const fsm = require("./Signup.js")

app.use("/",Router)
app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/index.html'));
});
 app.get('/about',(req,res)=>{
  res.sendFile(path.resolve('pages/about.html'))
})

app.use("/shop",shop);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
