//'use strict';


const express = require('express');
const app = express();
const api = require('./routes/api');

app.use('/public', express.static(process.cwd() + '/public'));
  
app.route('/')
    .get(function(req, res) {
		  res.sendFile(process.cwd() + '/views/');
    })

app.use('/api/v1', api);
app.use('/api/', api);
app.use('/', api);

//Enable pug (jade) for view rendering \n app.set('view engine', 'pug');





app.listen(process.env.PORT, function () {
  console.log('Node.js is listening ... on:' + process.env.PORT);
});