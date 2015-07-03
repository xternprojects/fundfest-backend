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


// -- POST REQUESTS -- //
app.post('/new_project', Project.newProject);
app.post('/get_all_projects', Project.getAllProjects);
app.post('/add_owner', Project.addOwner);
app.post('/change_project_name', Project.changeProjectName);
app.post('/change_project_desc', Project.changeProjectDesc);
app.post('/add_funding', Project.addFunding);
app.post('/add_backer', Project.addBacker);

app.listen(port, function() {
	console.log('Server running at port: ' + port);
});