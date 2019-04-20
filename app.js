var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var firebase = require("firebase/app");
var bodyParser = require("body-parser");
require("firebase/auth");
require("firebase/database");
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBNLCx5Yiy4-RgGJ_5vk8HetM9cyZoGe5U",
  authDomain: "girls-in-tech-29e3b.firebaseapp.com",
  databaseURL: "https://girls-in-tech-29e3b.firebaseio.com",
  projectId: "girls-in-tech-29e3b",
  storageBucket: "girls-in-tech-29e3b.appspot.com",
  messagingSenderId: "470097188027"
};
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
