-- Actualiza un negocio según su ID
UPDATE negocio
SET
    nombre = ?,
    direccion = ?,
    telefono = ?,
    descripcion = ?,
    id_rubro_negocio = ?
WHERE
    id_negocio = ?;