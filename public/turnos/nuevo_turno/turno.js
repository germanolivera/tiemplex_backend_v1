document.getElementById("form-turno").addEventListener("submit", async (e) => {
	e.preventDefault();
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
	const out = document.getElementById("resultado");
	out.textContent = "⏳ Registrando turno…";

	try {
		const res = await fetch("/turnos", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data),
		});
		if (res.ok) {
			const json = await res.json();
			out.textContent = `✅ Turno creado con ID ${json.id_turno}`;
		} else {
			const err = await res.json();
			out.textContent = `❌ ${err.error || "Fallo al registrar"}`;
		}
	} catch (err) {
		console.error("Fetch error:", err);
		out.textContent = "❌ Error de conexión";
	}
});
