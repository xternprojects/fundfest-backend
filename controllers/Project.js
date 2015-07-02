var Parse				= require('../app').Parse;
var Project 			= require('./Project');

module.exports.newProject = function(req, res) {
	var ProjectObject = Parse.Object.extend("Project");
	var newProject = new ProjectObject();
	console.log(req.body);
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