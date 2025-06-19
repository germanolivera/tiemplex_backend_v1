// public/turnos/eliminar/eliminar_turno.js

document
	.getElementById("form-eliminar-turno")
	.addEventListener("submit", async (e) => {
		e.preventDefault();
		const id = document.getElementById("id_turno").value;
		const out = document.getElementById("resultado");
		out.textContent = "⏳ Eliminando…";

		try {
			const resp = await fetch(`/turnos/${id}`, { method: "DELETE" });
			if (resp.status === 204) {
				out.textContent = `✅ Turno ${id} eliminado correctamente.`;
			} else {
				const { error } = await resp.json();
				out.textContent = `❌ ${
					error || "No se pudo eliminar el turno"
				}`;
			}
		} catch (err) {
			console.error("Fetch error:", err);
			out.textContent = "❌ Error de conexión con el servidor.";
		}
	});
