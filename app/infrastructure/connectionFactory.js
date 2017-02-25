var mysql = require('mysql');

//FACTORY METHOD
var connectMYSQL = function() {
	return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'root',
			database : 'sys'
		});
}

//Wrapper
module.exports = function() {
	console.log("express loading Db")
	return connectMYSQL;
}