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

module.exports.addOwner = function(req, res) {
	query.get(req.body.projectID, {
		success: function(project) {
			project.add('owners', { 'name': req.body.ownerName });
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

module.exports.changeProjectName = function(req, res) {
	query.get(req.body.projectID, {
		success: function(project) {
			project.set('projectName', req.body.newName);
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

module.exports.changeProjectDesc = function(req, res) {
	query.get(req.body.projectID, {
		success: function(project) {
			project.set('projectDescription', req.body.newDescription);
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

module.exports.addFunding = function(req, res) {
	query.get(req.body.projectID, {
		success: function(project) {
			var newFunding = project.get('funded') + req.body.addFunds;
			project.set('funded', newFunding);
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

module.exports.addBacker = function(req, res) {
	query.get(req.body.projectID, {
		success: function(project) {
			project.add('backers', {
				'amountPledged': req.body.amountPledged, 
				'userID': req.body.userID
			});
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