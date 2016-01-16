var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var routes = require('./routes');
var app = express();

app.use('/', express.static(__dirname + '/../dist'));

app.use('/', routes);

module.exports = app;