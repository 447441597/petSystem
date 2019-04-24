var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shopsRouter = require('./routes/shops');
var petOwnsRouter = require('./routes/petOwns');
var providersRouter = require('./routes/providers');
var serverTypesRouter = require('./routes/serverTypes');

var goodsRouter = require('./routes/goods');
var servicesRouter = require('./routes/services');
var applysRouter = require('./routes/applys');
var ordersRouter = require('./routes/orders');
var evaluationsRouter = require('./routes/evaluations');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(session({
  secret: "lovo",
  resave: true,
  saveUninitialized: false,
}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/shops', shopsRouter);
app.use('/petOwns', petOwnsRouter);
app.use('/providers', providersRouter);
app.use('/goods', goodsRouter);
app.use('/services', servicesRouter);
app.use('/applys', applysRouter);
app.use('/orders',ordersRouter);
app.use('/evaluations',evaluationsRouter)
app.use('/serverTypes',serverTypesRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
app.listen(3005,function(){
  console.log("服务器已经启动...");
})
module.exports = app;
