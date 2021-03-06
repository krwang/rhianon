var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongo = require('mongodb');
var mongoose = require('mongoose');

var routes = require('./routes/index');
var admin = require('./routes/admin');
// var history = require('./routes/history');
var subscriber = require('./routes/subscriber');
var announcement = require('./routes/announcement');

var app = express();

mongoose.connect('localhost:27017/rhianon')
var db = mongoose.connection;

app.listen(8000, "localhost");

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/admin', admin);
// app.use('/history', history);
app.use('/subscriber', subscriber);
app.use('/announcement', announcement);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
