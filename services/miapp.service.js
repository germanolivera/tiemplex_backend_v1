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
	const sql = sqlLoader.load("negocio", "insertar_negocio.sql");
	const [result, fields] = await pool.query(sql, [
		data.nombre,
		data.direccion,
		data.telefono,
		data.descripcion,
		data.id_rubro_negocio,
	]);

	return { id_negocio: result.insertId, ...data };
};

exports.delete = async (id) => {
	const sql = sqlLoader.load("negocio", "delete_negocio.sql");
	// devuelve [result] pero no lo usamos
	const [result] = await pool.query(sql, [id]);
	console.log(result); // Para depurar
};

exports.update = async (id, data) => {
	const sql = sqlLoader.load("negocio", "update_negocio.sql");
	const params = [
		data.nombre,
		data.direccion,
		data.telefono,
		data.descripcion,
		data.id_perfil_horario_negocio,
		id,
	];
	await pool.query(sql, params);
	// opcional: devolver el objeto modificado
	return { id_negocio: +id, ...data };
};
