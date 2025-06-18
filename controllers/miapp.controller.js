// Los controllers contienen la lógica de negocio y se comunican con los servicios para obtener o manipular datos.
const service = require("../services/miapp.service");

exports.getAll = async (req, res) => {
	try {
		const negocio = await service.getAll();
		console.log(negocio); // Llega la info OK
		res.json(negocio);
	} catch (err) {
		res.status(500).json({ error: "Error al obtener productos" });
	}
};

exports.create = async (req, res) => {
	try {
		const nuevo = await negocioService.create(req.body);
		res.status(201).json(nuevo);
	} catch (err) {
		res.status(500).json({ error: "Error al crear negocio" });
	}
};
