const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const logger = require('morgan');
const env = require('dotenv');
env.config();
const mongoose = require('mongoose');

//routes
const indexRouter = require('./routes/index');
const eventoRoutes = require('./routes/evento');
const categoriaRoutes = require('./routes/categoria');
const suscripcionRoutes = require('./routes/suscripcion');

//conection to database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {console.log('Success connect to DB')})
  .catch(err => {
    console.log(err.message)
  })


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


//middleware
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/public', express.static(`${__dirname}/storage/imagenes`))
//app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/api', eventoRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', suscripcionRoutes);


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

const PORT = process.env.PORT || 2010;



module.exports = app;
