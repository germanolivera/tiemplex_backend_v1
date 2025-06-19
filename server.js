const path = require("path");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Cargo mis rutas
const productRouter = require("./routes/miapp.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Sirvo estáticos de /public (index.html, css, js…)
app.use(express.static(path.join(__dirname, "public")));

// app.use(express.static(path.join(__dirname, "public", "listado_negocios")));

// Eliminar negocio
app.get("/borrar_negocio", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "borrar_negocio", "eliminar.html")
	);
});

app.get("/editar_negocio", (req, res) => {
	res.sendFile(
		path.join(__dirname, "public", "editar_negocio", "index.html")
	);
});

/* Listar los negocios */
app.use("/negocio", productRouter);

// Acá uso otra variable de entorno para el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

/**
 * NOTAS: borrar al final
 */

// Utilizo otro archivo
// app.use(express.static(path.join(__dirname, "public", "index2.html")));
