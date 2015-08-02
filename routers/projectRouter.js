var express = require( 'express' );
var bodyParser = require( 'body-parser' );

var router = express.Router();

var jsonParser = bodyParser.json();

router.get( '/:id?', function( req, res ){

	var query = new Parse.Query('Project');
	var ProjectObject = Parse.Object.extend("Project");

	var pageSize = req.query.pageSize > 0 ? req.query.pageSize : 50;
	var skipNumber = req.query.pageNumber > 0 ? req.query.pageNumber-1 : 0;

	var id = req.params.id;

	if( id ){
		query.equalTo( "objectId", id );
	}
	
	query.limit( pageSize );
	query.skip( pageSize * skipNumber );

	query.find().then(
		function( result ) {
			res.send( result );
		}, 
		function( err ) {
			res.status( 500 ).send( err );
		}
	);

});

router.post( '/', jsonParser, function( req, res ){

	var ProjectObject = Parse.Object.extend("Project");

	var newProject = new ProjectObject();
	var project = req.body;
	console.log( project );

	newProject.save( project ).then(
		function( proj ) {
			// Update the projectCount on this project's category
			var query = new Parse.Query("Category");
			query.equalTo( "objectId", project["categoryId"] );

			query.find().then(
				function( result ) {
					// console.log("result[0]['_serverData']['projectCount']: ", result[0]['_serverData']['projectCount']);
					var update = { "projectCount": (result[0]['_serverData']['projectCount'] + 1) };

					result[0].save( update );
				}, 
				function( err ) {
					// console.log(err);
				}
			);

			res.send( proj );
		},
		function( err ) {
			res.status( 500 ).send( err );
		}
	);

});

router.put( '/:id', jsonParser, function( req, res ){
	var id = req.params.id;
	var update = req.body;

	var ProjectObject = Parse.Object.extend("Project");
	var project = new ProjectObject();

	project.id = id;

	project.save( update ).then(
		function( proj ) {
			res.send( proj );
		},
		function( err ) {
			res.status( 500 ).send( err );
		}
	);

});

module.exports = router;