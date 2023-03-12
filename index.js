const express = require('express');
const app = express();
const port = 3010;
const path = require('path');
const Router = require('./routes.js');
app.use(express.static('static'));

app.use(Router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
