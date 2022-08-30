const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const logger = require('morgan');
const env = require('dotenv');
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
env.config();
const mongoose = require('mongoose');



//routes
const indexRouter = require('./routes/index');
const eventoRoutes = require('./routes/evento');
const categoriaRoutes = require('./routes/categoria');
const suscripcionRoutes = require('./routes/suscripcion');
const cursoRoutes = require('./routes/curso');
const usuarioRoutes = require('./routes/usuario');
const inscribirseRoutes = require('./routes/inscribirCurso');

//conection to database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {console.log('Success connect to DB')})
  .catch(err => {
    console.log(err.message)
  })

const swaggerOptions = {
  definition:{
    openapi: '3.0.0',
    info: {
      title:'Centro Cultural San Martín API',
      version: '1.0.0',
      description:'Centro Cultural San Martín API Information',
      contact:{
        name: 'Equipo c6-09-ft-mern de NO COUNTRY, integrado por Matías Alonso, Emiliano Oliveto, Patricio Oliveto, Mariana Ingrid Calle, Francisco Reccia y Leonardo Dávalos ',
    url: 'https://github.com/No-Country/c6-09-ft-mern',
  email:'maring.calle@gmail.com'
    },
    servers: ['http://localhost:2000']
    }
  },
  apis: ['./routes/*.js']
};

const app = express();

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');


//middleware
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/public', express.static(`${__dirname}/storage/imagenes`));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/api', eventoRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', suscripcionRoutes);
app.use('/api', cursoRoutes);
app.use('/api', usuarioRoutes);
app.use('/api', inscribirseRoutes);

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
