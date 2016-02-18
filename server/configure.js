var path            = require('path');
var routes          = require('./routes');
var exphbs          = require('express-handlebars');
var express         = require('express');
var bodyParser      = require('body-parser');
var cookieParser    = require('cookie-parser');
var morgan          = require('morgan');
var methodOverride  = require('method-override');
var errorHandler    = require('errorhandler');


module.exports = function(app) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({'extended' : true}));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(cookieParser('some-secret-value-here'));
  routes(app);// move routes to routes folder
  app.use('/public/', express.static(path.join(__dirname, '../public')));

  if ('development' === app.get('env')) {
    app.use(errorHandler());
  }
    return app;
};
