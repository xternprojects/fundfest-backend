var express 			= require('express');
var http				= require('http');
var bodyParser          = require('body-parser');
var session             = require('express-session');
var logger              = require('morgan');
var cookieParser        = require('cookie-parser');
var methodOverride      = require('method-override');
var dotenv 				= require('dotenv');

var projectRouter 		= require('./routers/projectRouter');

var app					= express()
var Parse 				= require('parse').Parse;

dotenv.load();

Parse.initialize( process.env.APP_ID, process.env.JS_KEY );

module.exports = {
	Parse : Parse
}

var Project			= require('./controllers/Project');

/// --- SETTING UP APP --- ///
app.set('port', process.env.PORT);
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'false'}));

/// --- ROUTES --- ///

// -- GET REQUESTS-- //
app.get('/', function(req, res) {
	res.send('Welcome to fundfest server side.')
});

app.use( '/projects', projectRouter );

app.listen(process.env.PORT, function() {
	console.log('Server running at port: ' + process.env.PORT);
});