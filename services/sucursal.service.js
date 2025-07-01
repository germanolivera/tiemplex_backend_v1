const sqlLoader = require("../utiles/sqlLoader.js");
const pool = require("../src/config/db.js");

exports.getAll = async () => {
	const sql = sqlLoader.load("sucursal", "listar_sucursal.sql");
	console.log("pase..."); // Datos OK
	console.log("Ejecutado " + sql); // Consulta OK
	const [rows] = await pool.query(sql);
	console.log("Registros:  " + rows.length); // Datos OK
	return rows;
};

exports.create = async (data) => {
	const sql = sqlLoader.load("sucursal", "insertar_sucursal.sql");
	const [result, fields] = await pool.query(sql, [
		data.nombre,
		data.direccion,
		data.telefono,
		data.descripcion,
		data.id_rubro_sucursal,
	]);

	return { id_sucursal: result.insertId, ...data };
};

exports.delete = async (id) => {
	const sql = sqlLoader.load("sucursal", "delete_sucursal.sql");
	// devuelve [result] pero no lo usamos
	const [result] = await pool.query(sql, [id]);
	console.log(result); // Para depurar
};

exports.update = async (id, data) => {
	const sql = sqlLoader.load("sucursal", "update_sucursal.sql");
	const params = [
		data.nombre,
		data.direccion,
		data.telefono,
		data.descripcion,
		data.id_perfil_horario_sucursal,
		id,
	];
	await pool.query(sql, params);
	// opcional: devolver el objeto modificado
	return { id_sucursal: +id, ...data };
};
