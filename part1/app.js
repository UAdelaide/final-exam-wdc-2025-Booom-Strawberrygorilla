var express = require('express');
var app = express();
var routes = require('./routes');

app.use(express.json());
app.use('/',routes);

app.listen
