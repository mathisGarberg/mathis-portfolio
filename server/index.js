let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    logger = require('morgan'),
    mongoose = require('mongoose'),
    config = require('./config/DB'),
    projects = require('./routes/projects');

// Get API routes

const app = express();

// connect to DB
mongoose.connect(config.DB, { useNewUrlParser: true })
    .then(() => console.log('connection succesful'))
    .catch((err) => console.error(err));
mongoose.Promise = global.Promise;

// parsers for POST data
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 3000;

// point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// set out api routes
app.use('/api', projects);

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
    res.json({
        message: err.message,
        error: err
    });
});
  
const server = app.listen(port, function(){
    console.log('Listening on port ' + port);
});
