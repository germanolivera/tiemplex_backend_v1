-- Recupera todos los turnos con sus datos
SELECT
    t.id_turno,
    t.id_sucursal,
    t.id_cliente,
    t.id_empleado,
    t.id_servicio,
    t.fecha_solicitud,
    t.fecha_turno,
    t.hora_turno,
    t.estado,
    t.observaciones
FROM
    turnos AS t
ORDER BY
    t.fecha_turno,
    t.hora_turno;