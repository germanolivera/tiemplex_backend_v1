const service = require("../services/turnos.service");

exports.create = async (req, res) => {
	try {
		const turnoCreado = await service.create(req.body);
		res.status(201).json(turnoCreado);
	} catch (err) {
		console.error("Error en create turno:", err);
		res.status(500).json({ error: "Error al crear turno" });
	}
};

exports.getAll = async (req, res) => {
	try {
		const lista = await service.getAll();
		res.status(200).json(lista);
	} catch (err) {
		console.error("Error en controller.getAll turnos:", err);
		res.status(500).json({ error: "Error al listar turnos" });
	}
};

exports.getAllCompl = async (req, res) => {
	try {
		const lista = await service.getAllCompl();
		res.status(200).json(lista);
	} catch (err) {
		console.error("Error en controller.getAllCompl turnos:", err);
		res.status(500).json({ error: "Error al listar turnos" });
	}
};

exports.update = async (req, res) => {
	const { id } = req.params;
	try {
		const actualizado = await service.update(id, req.body);
		res.status(200).json(actualizado);
	} catch (err) {
		console.error("Error en controller.update turno:", err);
		res.status(500).json({ error: "Error al actualizar turno" });
	}
};

exports.delete = async (req, res) => {
	const { id } = req.params;
	try {
		await service.delete(id);
		// 204 No Content: borrado exitoso
		res.status(204).end();
	} catch (err) {
		console.error("Error en controller.delete turno:", err);
		res.status(500).json({ error: "Error al eliminar turno" });
	}
};
