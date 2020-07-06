var mysql = require('mysql')
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'yeager',
	database: 'express_test'
})

connection.connect()

module.exports = connection
