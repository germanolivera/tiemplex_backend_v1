document.getElementById("form-editar").addEventListener("submit", async (e) => {
	e.preventDefault();
	const id = document.getElementById("id_sucursal").value;
	const data = {
		nombre: document.getElementById("nombre").value,
		direccion: document.getElementById("direccion").value,
		telefono: document.getElementById("telefono").value,
		descripcion: document.getElementById("descripcion").value,
		id_perfil_horario_sucursal: document.getElementById(
			"id_perfil_horario_sucursal"
		).value,
	};
	const resultado = document.getElementById("resultado");
	resultado.textContent = "⏳ Actualizando…";

	try {
		const resp = await fetch(`/sucursal/${id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (resp.ok) {
			const json = await resp.json();
			resultado.textContent = `✅ sucursal ${json.id_sucursal} actualizado.`;
		} else {
			const err = await resp.json();
			resultado.textContent = `❌ ${
				err.error || "Falló la actualización"
			}`;
		}
	} catch (err) {
		console.error("Fetch error:", err);
		resultado.textContent = "❌ Error de conexión con el servidor.";
	}
});
