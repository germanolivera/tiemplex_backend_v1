SELECT
    n.id_negocio,
    n.nombre AS nombre_negocio,
    dhn.dia_semana,
    dhn.horario_inicio,
    dhn.horario_fin,
    dhn.pausa_inicio,
    dhn.pausa_fin
FROM
    negocio n
    INNER JOIN dias_horarios_negocios dhn ON n.id_negocio = dhn.id_negocio
ORDER BY
    n.nombre,
    dhn.dia_semana;
