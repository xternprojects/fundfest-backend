var express = require( 'express' );
var bodyParser = require( 'body-parser' );

var router = express.Router();

var jsonParser = bodyParser.json();

router.get( '/:id?', function( req, res ){

	var query = new Parse.Query('Project');
	var ProjectObject = Parse.Object.extend("Project");

	var pageSize = req.query.pageSize > 0 ? req.query.pageSize : 50;
	var pageNumber = req.query.pageNumber > 0 ? req.query.pageNumber : 1;

	var id = req.params.id;

	if( id ){
		query.equalTo( "objectId", id );
	}
	
	query.limit( pageSize );
	query.skip( pageSize * pageNumber );

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
	project.endDate = new Date( project.endDate );
	project.estimatedDelivery = new Date( project.estimatedDelivery );

	newProject.save( project ).then(
		function( proj ) {
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