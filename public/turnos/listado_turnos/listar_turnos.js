// public/turnos/listar_turnos.js

document.getElementById("btn-cargar").addEventListener("click", async () => {
	const tbody = document.querySelector("#tabla-turnos tbody");
	tbody.innerHTML = "<tr><td colspan='10'>⏳ Cargando…</td></tr>";
	try {
		const resp = await fetch("/turnos");
		if (!resp.ok) throw new Error("Status " + resp.status);
		const turnos = await resp.json();
		console.log(turnos)
		if (turnos.length === 0) {
			tbody.innerHTML =
				"<tr><td colspan='10'>No hay turnos registrados.</td></tr>";
			return;
		}
		tbody.innerHTML = turnos
			.map(
				(t) => `
				<tr>
					<td>${t.id_turno}</td>
					<td>${t.id_sucursal}</td>
					<td>${t.id_cliente}</td>
					<td>${t.id_empleado}</td>
					<td>${t.id_servicio}</td>
					<td>${t.fecha_turno}</td>
					<td>${t.hora_turno}</td>
					<td>${t.estado}</td>
					<td>${new Date(t.fecha_solicitud).toLocaleString()}</td>
					<td>${t.observaciones || ""}</td>
				</tr>`
			).join("");

	} catch (err) {
		console.error("listar_turnos.js: Error listar turnos:", err);
		document.querySelector(
			"#tabla-turnos tbody"
		).innerHTML = `<tr><td colspan='10'>❌ Error al cargar.</td></tr>`;
	}
});