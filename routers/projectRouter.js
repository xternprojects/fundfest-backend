var express = require( 'express' );
// var Parse	= require('../app').Parse;
// var Project	= Parse.Object.extend("Project");
// var query 	= new Parse.Query('Project');

var router = express.Router();

router.get( '/', function( req, res ){

	// query.find().then(
	// 	function(result) {
	// 		res.send(JSON.stringify(result));
	// 	}, 
	// 	function(err) {
	// 		console.log(err);
	// 		res.sendStatus(500);
	// 	}
	// );

});

router.post( '/', function( req, res ){

});

router.put( '/:id', function( req, res ){
	
});

module.exports = router;