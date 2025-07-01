SELECT
    n.id_sucursal,
    n.nombre AS nombre_sucursal,
    n.direccion,
    n.telefono,
    n.descripcion,
    n.id_rubro_sucursal
FROM
    sucursal n
ORDER BY
    n.nombre;

