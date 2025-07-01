SELECT
    t.id_turno,
    t.fecha_turno,
    t.hora_turno,
    t.estado,
    t.observaciones,
    cli.nombre AS nombre_cliente,
    emp.nombre AS nombre_empleado,
    s.nombre AS nombre_servicio,
    suc.nombre AS nombre_sucursal
FROM
    turnos t
    JOIN usuarios cli ON t.id_cliente = cli.id_usuario
    JOIN usuarios emp ON t.id_empleado = emp.id_usuario
    JOIN servicios s ON t.id_servicio = s.id_servicio
    JOIN sucursal suc ON t.id_sucursal = suc.id_sucursal;
