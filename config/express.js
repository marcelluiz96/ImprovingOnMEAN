var express = require('express');
var load = require('express-load');



module.exports  = function() {
	console.log('Initializing Express and Express-load into app var');

	var app = express(); //Initializing Express

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	load('routes', {cwd: 'app'}) //Sendind a JSON to reduce the search time of the folders
		.then('infrastructure') //Initializing the Infrastructure (such as DB Connection)
		.into(app); //loading all webpage routes via express-load

	return app;
}