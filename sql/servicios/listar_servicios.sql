SELECT
    n.id_servicio,
    n.id_sucursal,
    n.nombre,
    n.descripcion,
    n.duracion,
    n.precio,
    n.creacion_servicio
FROM
    servicios n
ORDER BY
    n.nombre;
