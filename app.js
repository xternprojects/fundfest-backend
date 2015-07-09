var express 			= require('express')
var http				= require('http')
var mongoose			= require('mongoose')
var bodyParser          = require('body-parser');
var session             = require('express-session');
var logger              = require('morgan');
var cookieParser        = require('cookie-parser');
var methodOverride      = require('method-override');

var app					= express()
var port				= process.env.PORT || 5000;
var Parse 				= require('parse').Parse;

Parse.initialize("Y649KKe49bjmyS0ggTp4LGNAAOtMk2O0r8VqCUHj", "Iy87FXKYYJezTT8N0kt7Q8CJchwbAgU290mYujr9");

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

// GETS ALL THE PROJECTS //
app.get('/projects', Project.getAllProjects);

// POSTS A NEW PROJECT //
app.post('/project', Project.newProject);

// UPDATES A PROJECT // 
app.put('/project', Project.updateProject);

app.listen(port, function() {
	console.log('Server running at port: ' + port);
});