-- Inserta un nuevo turno. fecha_solicitud se toma como NOW().
INSERT INTO
    turnos (
        id_negocio,
        id_cliente,
        id_empleado,
        id_servicio,
        fecha_solicitud,
        fecha_turno,
        hora_turno,
        estado,
        observaciones
    )
VALUES
    (?, ?, ?, ?, NOW (), ?, ?, ?, ?);