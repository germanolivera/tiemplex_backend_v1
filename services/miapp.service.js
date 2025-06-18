// El servicio de productos maneja la lógica de negocio relacionada con los productos.

const sqlLoader = require("../utiles/sqlLoader.js");
const pool = require("../src/config/db");

exports.getAll = async () => {
	const sql = sqlLoader.load("negocio", "listar_negocios.sql");
	console.log("Ejecutado " + sql); // Consulta OK
	const [rows] = await pool.query(sql);
	console.log("Registros:  " + rows.length); // Datos OK
	return rows;
};

exports.create = async (data) => {
	const sql = sqlLoader.load("negocio", "insertNegocio.sql");
	const [result, fields] = await pool.query(sql, [
		data.nombre,
		data.direccion,
		data.telefono,
		data.descripcion,
		data.id_rubro_negocio,
	]);
	
	return { id_negocio: result.insertId, ...data };
};
