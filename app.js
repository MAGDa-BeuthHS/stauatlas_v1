var express = require('express');
var path = require('path');
require('dotenv').config();
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

var knex = require('knex')({
	client: 'mysql',
	connection: {
		host : process.env.DB_HOST,
		user : process.env.DB_USER,
		password : process.env.DB_PASS,
		database : 'masterprojektgeschwindigkeitsdaten',
		charset  : 'utf8'
	}
}); //require knex query binder
var Bookshelf = require('bookshelf')(knex); //require Bookshelf ORM Framework

var index = require('./routes/index');
var restApi = require('./routes/REST')(Bookshelf);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', restApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
