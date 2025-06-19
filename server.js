const path = require("path");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Cargo mis rutas
const productRouter = require("./routes/miapp.routes");
const turnosRouter = require("./routes/turnos.routes");

const app = express();
app.use(cors());
app.use(express.json());

/* Listar los negocios */
app.use("/negocio", productRouter);

/* Insertar turno */
app.use("/turnos", turnosRouter);

// Borrar negocio: http://localhost:3000/negocio/borrar_negocio/
app.get("/borrar_negocio", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "negocio", "borrar_negocio", "eliminar.html")
	);
});

// Editar negocio: http://localhost:3000/negocio/editar_negocio/
app.get("/editar_negocio", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "negocio", "editar_negocio", "index.html")
	);
});

// Listado negocio: http://localhost:3000/negocio/listado_negocios/
app.get("/listado_negocios", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "negocio", "listado_negocios", "index.html")
	);
});


// Nuevo negocio: http://localhost:3000/negocio/nuevo_negocio/
app.get("/nuevo_negocio", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "negocio", "nuevo_negocio", "index.html")
	);
});

// Nuevo turno
app.get("/nuevo_turno", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "turnos", "nuevo_turno", "index.html")
	);
});

// Listado de turnos
app.get("/listado_turnos", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "turnos", "listado_turnos", "index.html")
	);
});

// Editar turno
app.get("/editar", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "turnos", "editar_turno", "index.html")
	);
});

// Eliminar turno
app.get("/editar", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "turnos", "eliminar_turno", "index.html")
	);
});

// Eliminar turno
app.get("/eliminar_turno", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "turnos", "eliminar_turno", "index.html")
	);
});

// Sirvo estáticos de /public (index.html, css, js…)
app.use(express.static(path.join(__dirname, "public")));


// Acá uso otra variable de entorno para el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});