const sqlLoader = require("../utiles/sqlLoader");
const pool = require("../src/config/db");

exports.create = async (data) => {
	const sql = sqlLoader.load("turnos", "insertar_turno.sql");
	const params = [
		data.id_negocio,
		data.id_cliente,
		data.id_empleado,
		data.id_servicio,
		data.fecha_turno,
		data.hora_turno,
		data.estado,
		data.observaciones,
	];
	const [result] = await pool.query(sql, params);
	return {
		id_turno: result.insertId,
		...data,
		fecha_solicitud: new Date().toISOString(),
	};
};

exports.getAll = async () => {
	const sql = sqlLoader.load("turnos", "listar_turnos.sql");
	const [rows] = await pool.query(sql);
	return rows;
};

exports.update = async (id, data) => {
	const sql = sqlLoader.load("turnos", "update_turno.sql");
	const params = [
		data.id_negocio,
		data.id_cliente,
		data.id_empleado,
		data.id_servicio,
		data.fecha_turno,
		data.hora_turno,
		data.estado,
		data.observaciones,
		id,
	];
	await pool.query(sql, params);
	// Opcional: devolver el objeto actualizado
	return { id_turno: +id, ...data };
};

exports.delete = async (id) => {
	const sql = sqlLoader.load("turnos", "delete_turno.sql");
	await pool.query(sql, [id]);
};
