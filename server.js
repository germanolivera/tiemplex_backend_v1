require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");

// Cargo mis rutas
const productRouter = require("./routes/miapp.routes");

const app = express();
app.use(cors());
app.use(express.json());

// Sirvo estáticos de /public (index.html, css, js…)
app.use(express.static(path.join(__dirname, "public")));

/* 
	Genero un LISTADO DE NEGOCIOS cargados en mi base
	Link: http://localhost:3000/listado_negocios/
 */
app.use(express.static(path.join(__dirname, "public", "listado_negocios")));

/* End point para listar los negocios */
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
