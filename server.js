const path = require("path");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Cargo mis rutas
const productRouter = require("./routes/sucursal.routes"); TODO:"Cambiar nombre luego de completar de entrega"
const turnosRouter = require("./routes/turnos.routes");
const usuariosRouter = require("./routes/usuarios.routes");
const serviciosRouter = require("./routes/servicios.routes");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/sucursal", productRouter);
app.use("/turnos", turnosRouter);
app.use("/usuarios", usuariosRouter);
app.use("/servicios", serviciosRouter);

// Borrar sucursal: http://localhost:3000/sucursal/borrar_sucursal/
app.get("/borrar_sucursal", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "sucursal", "borrar_sucursal", "eliminar.html")
	);
});

// Editar sucursal: http://localhost:3000/sucursal/editar_sucursal/
app.get("/editar_sucursal", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "sucursal", "editar_sucursal", "index.html")
	);
});

// Listado sucursal: http://localhost:3000/sucursal/listado_sucursal/
app.get("/listado_sucursal", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "sucursal", "listado_sucursal", "index.html")
	);
});

// Nuevo sucursal: http://localhost:3000/sucursal/nuevo_sucursal/
app.get("/nuevo_sucursal", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "sucursal", "nuevo_sucursal", "index.html")
	);
});

// Nuevo turno: http://localhost:3000/turnos/nuevo_turno/
app.get("/nuevo_turno", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "turnos", "nuevo_turno", "index.html")
	);
});

// Listado de turnos: http://localhost:3000/turnos/listado_turnos/
app.get("/listado_turnos", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "turnos", "listado_turnos", "index.html")
	);
});

// Editar turno: http://localhost:3000/turnos/editar_turno/
app.get("/editar", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "turnos", "editar_turno", "index.html")
	);
});

// Eliminar turno: http://localhost:3000/turnos/eliminar_turno/
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