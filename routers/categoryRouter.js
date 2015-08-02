var express = require( 'express' );
var bodyParser = require( 'body-parser' );

var router = express.Router();

var jsonParser = bodyParser.json();

router.get( '/:id?', function( req, res ){

	var query = new Parse.Query('Category');
	var CategoryObject = Parse.Object.extend("Category");

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

	var CategoryObject = Parse.Object.extend("Category");

	var newCategory = new CategoryObject();
	var category = req.body;
	console.log( category );

	newCategory.save( category ).then(
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

	var CategoryObject = Parse.Object.extend("Category");
	var category = new CategoryObject();

	category.id = id;

	category.save( update ).then(
		function( proj ) {
			res.send( proj );
		},
		function( err ) {
			res.status( 500 ).send( err );
		}
	);
});

module.exports = router;