var express 			= require('express');
var http				= require('http');
var bodyParser          = require('body-parser');
var session             = require('express-session');
var logger              = require('morgan');
var cookieParser        = require('cookie-parser');
var methodOverride      = require('method-override');

var projectRouter 		= require('./routers/projectRouter');

var app					= express()
var Parse 				= require('parse').Parse;

Parse.initialize( process.env.APP_ID, process.env.JS_KEY );

module.exports = {
	Parse : Parse
}

var Project			= require('./controllers/Project');

/// --- SETTING UP APP --- ///
app.set('port', port);
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

// GETS ALL THE PROJECTS //
app.get('/projects', Project.getAllProjects);

// POSTS A NEW PROJECT //
app.post('/project', Project.newProject);

// UPDATES A PROJECT // 
app.put('/project', Project.updateProject);

app.listen(port, function() {
	console.log('Server running at port: ' + port);
});