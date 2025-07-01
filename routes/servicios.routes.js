const express = require("express");
const router = express.Router();
const controller = require("../controllers/servicios.controller");

router.get("/", controller.getAll);

/* Para esta entrega no genero las APIS que no necesito */

module.exports = router;
