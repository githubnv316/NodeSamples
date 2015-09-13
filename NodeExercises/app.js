var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var exphbs  = require('express-handlebars');
var config = require('config');
var util = require('util');

var app = express();
module.exports = app;


var router = express.Router();
var routes = require('./routes');

// view engine setup
/* var hbsHelpers = require('./lib/handlebarHelpers');
var hbs = exphbs.create({
    defaultLayout: 'main',
    extname: '.hbs'
});
hbs.helpers = hbsHelpers(hbs.handlebars);
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs'); */

app.set('env', config.environment || 'development');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);
routes(router);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log('in 404');
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers
// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        util.debug(err.message);
        res.status(err.status || 500);
        res.write(err.message);
        res.end();
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log('in prod error function');
    res.status(err.status || 500);

   /* res.render('error', {
        message: err.message,
        error: {}
    }); */

    res.write('internal error');
    res.end();
});
