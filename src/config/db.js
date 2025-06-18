// Este archivioo es parte de un proyecto que utiliza dotenv para manejar variables de entorno.

require("dotenv").config();

const mysql = require("mysql2");

const pool = mysql.createPool({
	// Las siguientes variables estan en el archivo de entorno
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
});

module.exports = pool.promise();
