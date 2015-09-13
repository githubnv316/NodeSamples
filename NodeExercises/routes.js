
module.exports = function(router) {

	/* GET home page. */
	router.get('/', function(req, res) {

		console.log('home');
		res.sendFile(__dirname + '/public/html/index.html');
	});
	
};