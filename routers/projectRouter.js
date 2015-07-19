var express = require( 'express' );
var bodyParser = require( 'body-parser' );

var router = express.Router();

var jsonParser = bodyParser.json();

router.get( '/:id?', function( req, res ){

	var query = new Parse.Query('Project');
	var ProjectObject = Parse.Object.extend("Project");

	var id = req.params.id;

	if( id ){
		query.equalTo( "objectId", id );
	}
	
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
});

module.exports = router;