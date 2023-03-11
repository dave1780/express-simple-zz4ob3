const express = require('express');
const Router = express.Router();
const path = require('path');

Router.get('/Signup', (req, res, next) => {
  res.sendFile(path.resolve('pages/Signup.html'));
  next();
});
Router.post('/Signup', (req, res, next) => {
  console.log(req.body);
  next();
});

module.exports = Router;
