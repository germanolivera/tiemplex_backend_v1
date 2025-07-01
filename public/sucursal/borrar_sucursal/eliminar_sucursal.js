document
	.getElementById("form-eliminar")
	.addEventListener("submit", async (e) => {
		e.preventDefault();
		const id = document.getElementById("id_sucursal").value;
		const resultado = document.getElementById("resultado");
		resultado.textContent = "⏳ Procesando…";

		try {
			const resp = await fetch(`/sucursal/${id}`, { method: "DELETE" });
			if (resp.status === 204) {
				resultado.textContent = "✅ sucursal eliminado correctamente.";
			} else {
				const { error } = await resp.json();
				resultado.textContent = `❌ ${error || "No se pudo eliminar"}`;
			}
		} catch (err) {
			console.error("Fetch error:", err);
			resultado.textContent = "❌ Error de conexión con el servidor.";
		}
	});
