var express 			= require('express');
var http				= require('http');
var bodyParser          = require('body-parser');
var logger              = require('morgan');
var cookieParser        = require('cookie-parser');
var dotenv 				= require('dotenv');

var app					= express();
global.Parse 			= require('parse').Parse;

dotenv.load();

Parse.initialize( process.env.APP_ID, process.env.JS_KEY );

var server = http.createServer( app );

// var Project			= require('./controllers/Project');
var projectRouter 		= require('./routers/projectRouter');
var categoryRouter 		= require('./routers/categoryRouter');

/// --- SETTING UP APP --- ///
app.set('port', process.env.PORT);
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: 'false'}));

// -- GET REQUESTS-- //
app.get('/', function(req, res) {
	res.send('Welcome to fundfest server side.')
});

app.use( '/projects', projectRouter );
app.use( '/categories', categoryRouter )

server.listen(process.env.PORT, function() {
	console.log('Server running at port: ' + process.env.PORT);
});