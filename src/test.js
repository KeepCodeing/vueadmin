const Mock = require('mockjs');
const express = require('express');

const app = express();

app.use('/data', function (req, res) {
  res.json(Mock.mock({
    'data': 'hello world',
  }));
});

app.listen('8090', function () {
  console.log('hello')
});
