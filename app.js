var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var usersadmin = require('./routes/admin');
var userscreate = require('./routes/create');
var usersdeleteo = require('./routes/delete');
var usersmodi = require('./routes/modificar');
var bodyParser = require('body-parser');

var usersauth = require('./routes/auth');


var usersProductos = require('./routes/productos');
var usersregistro = require('./routes/registro');
var userslogin = require('./routes/login');
const {engine} = require('express-handlebars');
const myconnection = require('express-myconnection');
const mysql =require('mysql');
const session = require('express-session');


//bcryptjs
const bcryptjs = require('bcryptjs');
//var sesion 
const sesion = require('express-session');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(bodyParser.urlencoded({extends:false}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/productos', usersProductos);
app.use('/login', userslogin);
app.use('/registro', usersregistro);
app.use('/admin', usersadmin);
app.use('/create', userscreate);
app.use('/delete', usersdeleteo);
app.use('/modificar', usersmodi);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(sesion({
  secret:'secret',
  resave: true,
  saveUninitialized: true
}));

//require('./conexion/conexion')

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
