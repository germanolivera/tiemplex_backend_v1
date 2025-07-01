const sqlLoader = require("../utiles/sqlLoader.js");
const pool = require("../src/config/db.js");

exports.getAll = async () => {
	const sql = sqlLoader.load("servicios", "listar_servicios.sql");
	const [rows] = await pool.query(sql);
	return rows;
};

/* No genero para esta entrega las demas APis */
