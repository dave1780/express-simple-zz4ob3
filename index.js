const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const Router = require('./routes.js');
const bodyParser= require("body-parser")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('static'));

app.use('/', Router);

app.get('/', (req, res) => {
  res.sendFile(path.resolve('pages/Signup.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
