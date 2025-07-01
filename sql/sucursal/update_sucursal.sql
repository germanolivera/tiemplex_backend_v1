-- Actualiza un sucursal según su ID
UPDATE sucursal
SET
    nombre = ?,
    direccion = ?,
    telefono = ?,
    descripcion = ?,
    id_rubro_sucursal = ?
WHERE
    id_sucursal = ?;