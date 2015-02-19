var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// database
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/test");

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// view engine setup
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');

//// modules conf
var BaseConfig = require('./module/application/config/baseConfig');
var baseConfig = new BaseConfig(app).init();
var StatisticConfig = require('./module/statistic/config/config');
var statisticConfig = new StatisticConfig(app).init();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.send('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send({
        message: err.message,
        error: {}
    });
});

module.exports = app;
