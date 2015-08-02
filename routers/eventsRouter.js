var express = require( 'express' );
var bodyParser = require( 'body-parser' );

var router = express.Router();

var jsonParser = bodyParser.json();

router.get( '/:id?', function( req, res ){

	var query = new Parse.Query('Event');
	var EventObject = Parse.Object.extend("Event");

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

	var EventObject = Parse.Object.extend("Event");

	var newEvent = new EventObject();
	var Event = req.body;
	console.log( Event );

	newEvent.save( Event ).then(
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

	var EventObject = Parse.Object.extend("Event");
	var Event = new EventObject();

	Event.id = id;

	Event.save( update ).then(
		function( proj ) {
			res.send( proj );
		},
		function( err ) {
			res.status( 500 ).send( err );
		}
	);
});

router.delete( '/:id', jsonParser, function( req, res ){
	var id = req.params.id;

	var EventObject = Parse.Object.extend("Event");
	var query = new Parse.Query( EventObject );

	query.get( id ).then(
		function( eventObj ){
			eventObj.destroy().then(
				function( destroyedObj ){
					res.sendStatus( 200 );
				},
				function( notDestroyed, err ){
					res.status( 500 ).send( err );
				}
			);
		},
		function( err ){
			res.status( 500 ).send( err );
		}
	);
});

module.exports = router;