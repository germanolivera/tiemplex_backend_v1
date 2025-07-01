// Los controllers contienen la lógica de sucursal y se comunican con los servicios para obtener o manipular datos.
const service = require("../services/sucursal.service");

exports.getAll = async (req, res) => {
	try {
		const sucursal = await service.getAll();
		console.log(sucursal); // Llega la info OK
		res.json(sucursal);
	} catch (err) {
		res.status(500).json({ error: "Error al obtener productos" });
	}
};

exports.create = async (req, res) => {
	try {
		const nuevo = await service.create(req.body);
		console.log(nuevo);
		res.status(201).json(nuevo);
	} catch (err) {
		// console.error("Error en controller.create:", err); // Logueo el error para depurar
		res.status(500).json({ error: "Error al crear sucursal" });
	}
};

exports.delete = async (req, res) => {
	const { id } = req.params;
	try {
		console.log("ID a eliminar:", id); // Logueo el ID para depurar
		await service.delete(id);
		// 204 No Content indica que fue exitoso y no hay cuerpo
		res.status(204).end();
	} catch (err) {
		console.error("Error en controller.delete:", err);
		res.status(500).json({ error: "Error al eliminar sucursal" });
	}
};

exports.update = async (req, res) => {
	const { id } = req.params;
	try {
		const actualizado = await service.update(id, req.body);
		res.status(200).json(actualizado);
	} catch (err) {
		console.error("Error en controller.update:", err);
		res.status(500).json({ error: "Error al actualizar sucursal" });
	}
};
