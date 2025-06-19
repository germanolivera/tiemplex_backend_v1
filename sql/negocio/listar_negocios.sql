SELECT
    n.id_negocio,
    n.nombre AS nombre_negocio,
    n.direccion,
    n.telefono,
    n.descripcion,
    n.id_rubro_negocio
FROM
    negocio n
ORDER BY
    n.nombre;

