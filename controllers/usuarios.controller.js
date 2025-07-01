const service = require("../services/usuarios.service");

exports.getAll = async (req, res) => {
    try {
        const lista = await service.getAll();
        res.status(200).json(lista);
    } catch (err) {
        console.error("Error en controller.getAll usuarios:", err);
        res.status(500).json({ error: "Error al listar usuarios" });
    }
};

/* Para esta entrega no genero las APIs que no voy a necesitar */