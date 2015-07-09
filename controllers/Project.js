var Parse				= require('../app').Parse;
var Project 			= require('./Project');
var ProjectObject 		= Parse.Object.extend("Project");
var query 				= new Parse.Query('Project');

module.exports.newProject = function(req, res) {
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
	query.find({
		success: function(result) {
			res.send(JSON.stringify(result));
		}, error: function(err) {
			console.log(err);
			res.sendStatus(500);
		}
	});
}

module.exports.updateProject = function(req, res) {
	query.get(req.body.projectID, {
		success: function(project) {
			var newProjectName = req.body.projectName || project.get('projectName');
			var newProjectDesc = req.body.projectDescription || project.get('projectDescription');
			var newOwners = req.body.owners || project.get('owners');
			var pledged = req.body.pledged || project.get('pledged');

			project.set('projectName', newProjectName);
			project.set('projectDescription', newProjectDesc);
			project.set('owners', newOwners);
			project.set('pledged', pledged);
			project.save(null, {
				success: function(project) {
					res.sendStatus(200);
				}, error: function(object, err) {
					console.log(err);
					res.sendStatus(500);
				}
			});
		}, error: function(object, err) {
			console.log(err);
			res.sendStatus(500);
		}
	});
}