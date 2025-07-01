SELECT
    n.id_usuario,
    n.id_sucursal,
    n.nombre,
    n.email,
    n.telefono,
    n.password,
    n.tipo_usuario,
    n.rol_empleado,
    n.fecha_alta
FROM
    usuarios n
ORDER BY
    n.nombre;
