var express = require( 'express' );
var bodyParser = require( 'body-parser' );

var router = express.Router();

var jsonParser = bodyParser.json();

router.post( '/categories', jsonParser, function( req, res ){

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

router.put( '/categories/:id', jsonParser, function( req, res ){
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