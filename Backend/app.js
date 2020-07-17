var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('client-sessions');
var categoryRouter = require('./routes/category');
var productRouter = require('./routes/product');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));
// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost:27017/inventory';
const mongoDB = dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Allow Access Control
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', categoryRouter);
app.use('/', productRouter);
app.get('/testzoom', (req, res) => {
  // console.log('input is: '+req.params.id);
  var Zoom = require("zoomus")({
    key: "EsJ9IIy_SXCEWu2glgoi8g",
    secret: "qFiAQ1OzPjG46fKGzKsYYLES2pWlmJxF0Le6"
  });

  var meeting = {
    host_id: "Y5ysc2Q1SUe_sgyJwfNR-Q",
    type: 1,
    topic: "test 2 Meeting Topic"
  }

  Zoom.meeting.create(meeting, function (res) {
    if (res.error) {
      res.status(200);
      res.send('res error: ', res.error);
      //handle error

    } else {
      res.status(200);
      console.log(res);
      res.send(res)
    }
  });
  // res.status(200);
  // res.send("hello zoom")      ;
  // res.end();
});
const port = 5000;

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

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

module.exports = app;