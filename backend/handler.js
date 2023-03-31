const serverless = require("serverless-http");
const express = require("express");
const socket = require('socket.io')
const app = express();
//const dotenv = require('dotenv').config()
const {connectDB} = require('./config/db');
const bodyParser = require('body-parser');


// const io = socket(serverless(app))
// io.on('connection', function(socket ){
//   console.log("made socket connection")
// })

connectDB();

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE', 'PATCH', 'OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Credentials', false);
  res.setHeader('Content-Type', 'application/json')
  next();

});

app.use(bodyParser.json())

app.use('/api/v1/users', require('./routes/userRoute'));
app.use('/api/v1/chats', require('./routes/chatRoute'));
app.use('api/vi/openai', require('./routes/openaiRoutes'));
  

module.exports.handler = serverless(app);
z