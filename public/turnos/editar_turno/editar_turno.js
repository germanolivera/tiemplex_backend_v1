// public/turnos/editar/editar_turno.js

document
	.getElementById("form-editar-turno")
	.addEventListener("submit", async (e) => {
		e.preventDefault();

		const id = document.getElementById("id_turno").value;
		const data = {
			id_sucursal: +document.getElementById("id_sucursal").value,
			id_cliente: +document.getElementById("id_cliente").value,
			id_empleado: +document.getElementById("id_empleado").value,
			id_servicio: +document.getElementById("id_servicio").value,
			fecha_turno: document.getElementById("fecha_turno").value,
			hora_turno: document.getElementById("hora_turno").value,
			estado: document.getElementById("estado").value,
			observaciones: document.getElementById("observaciones").value,
		};

		const resultado = document.getElementById("resultado");
		resultado.textContent = "⏳ Actualizando turno…";

		try {
			const resp = await fetch(`/turnos/${id}`, {
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			if (resp.ok) {
				const json = await resp.json();
				resultado.textContent = `✅ Turno ${json.id_turno} actualizado.`;
			} else {
				const err = await resp.json();
				resultado.textContent = `❌ ${
					err.error || "Error al actualizar"
				}`;
			}
		} catch (err) {
			console.error("Fetch error:", err);
			resultado.textContent = "❌ Error de conexión al servidor.";
		}
	});
