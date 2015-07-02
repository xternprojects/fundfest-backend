var Parse				= require('../app').Parse;
var Project 			= require('./Project');

module.exports.newProject = function(req, res) {
	var ProjectObject = Parse.Object.extend("Project");
	var newProject = new ProjectObject();
	newProject.save({
		projectName: 				req.body.projectName,
		projectDescription: 		req.body.projectDescription || null,
		owners: 					req.body.owners,
		funded: 					req.body.funded || 0,
		pledged: 					req.body.pledged,
		backers: 					req.body.backers || null,
		endDate: 					new Date(req.body.endDate),
		estimatedDelivery: 			new Date(req.body.estimatedDelivery)
	}, {
		success: function(proj) {
			res.sendStatus(200);
		},
		error: function(proj, err) {
			console.log(err);
			res.sendStatus(500);
		}
	});
}

module.exports.getAllProjects = function(req, res) {
	var query = new Parse.Query('Project');
	query.find({
		success: function(result) {
			res.send(JSON.stringify(result));
		}, error: function(err) {
			console.log(err);
			res.send(500);
		}
	});
}