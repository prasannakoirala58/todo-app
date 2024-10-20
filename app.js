var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Todo router
const todoRouter = require('./routes/todoRoutes');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const dotenv = require('dotenv');

dotenv.config();

var app = express();

app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err));

// Here the todoRouter is used to handle all the routes related to the Todo model
app.use('/', todoRouter);

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
