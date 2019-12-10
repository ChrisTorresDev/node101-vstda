const express = require('express');
const morgan = require('morgan');
const data = require('./data');

const app = express();

// add your code here
app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.status(200).send('ok');
})

app.get('/api/TodoItems', function (req, res) {
  res.json(data).status(200);
})

module.exports = app;
