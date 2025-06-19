-- Actualiza un turno según su ID
UPDATE turnos
SET
    id_negocio = ?,
    id_cliente = ?,
    id_empleado = ?,
    id_servicio = ?,
    fecha_turno = ?,
    hora_turno = ?,
    estado = ?,
    observaciones = ?
WHERE
    id_turno = ?;