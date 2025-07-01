-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 01-07-2025 a las 23:44:30
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tiemplex_version_simplificada`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rubros_sucursal`
--

CREATE TABLE `rubros_sucursal` (
  `id_rubro_sucursal` int(11) NOT NULL,
  `nombre_rubro` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rubros_sucursal`
--

INSERT INTO `rubros_sucursal` (`id_rubro_sucursal`, `nombre_rubro`) VALUES
(1, 'Peluquería Masculina'),
(2, 'Peluquería Femenina'),
(3, 'Peluquería Unisex'),
(4, 'Barbería Tradicional'),
(5, 'Servicio de Belleza Unisex');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `id_servicio` int(11) NOT NULL,
  `id_sucursal` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `precio` decimal(10,2) DEFAULT NULL,
  `creacion_servicio` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`id_servicio`, `id_sucursal`, `nombre`, `descripcion`, `duracion`, `precio`, `creacion_servicio`) VALUES
(21, 11, 'Corte clásico', 'Corte de cabello estilo clásico con tijera y máquina.', 30, 3500.00, '2025-06-14'),
(22, 11, 'Afeitado tradicional', 'Afeitado al ras con toalla caliente y navaja.', 20, 2500.00, '2025-06-14'),
(23, 11, 'Perfilado de barba', 'Definición de barba y contornos con precisión.', 25, 3000.00, '2025-06-14'),
(24, 12, 'Corte moderno', 'Corte de cabello con diseño actual y degradados.', 40, 4000.00, '2025-06-14'),
(25, 12, 'Afeitado premium', 'Afeitado con tratamiento de piel post-afeitado.', 25, 3200.00, '2025-06-14'),
(26, 12, 'Barba & Facial', 'Corte de barba con limpieza facial express.', 30, 4500.00, '2025-06-14'),
(27, 13, 'Limpieza facial profunda', 'Limpieza profunda y exfoliación de la piel.', 60, 7000.00, '2025-06-14'),
(28, 13, 'Masaje relajante', 'Sesión de masaje corporal relajante con aceites.', 45, 8000.00, '2025-06-14'),
(29, 13, 'Tratamiento hidratante facial', 'Hidratación intensiva con productos naturales.', 40, 6500.00, '2025-06-14'),
(30, 14, 'Peeling químico', 'Renovación de piel mediante exfoliación química.', 50, 9000.00, '2025-06-14'),
(31, 14, 'Radiofrecuencia facial', 'Tratamiento reafirmante y anti-age facial.', 45, 10000.00, '2025-06-14'),
(32, 14, 'Depilación definitiva', 'Sesión de depilación láser por zona.', 30, 9500.00, '2025-06-14');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `id_sucursal` int(11) NOT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `descripcion` varchar(200) DEFAULT NULL,
  `fecha_alta` date DEFAULT NULL,
  `id_rubro_sucursal` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`id_sucursal`, `nombre`, `direccion`, `telefono`, `descripcion`, `fecha_alta`, `id_rubro_sucursal`) VALUES
(11, 'Pelos House San Telmo', 'Estados Unidos 1234, CABA', '011-5555-1234', 'Especialistas en cortes clásicos y modernos para hombres.', '2025-06-14', NULL),
(12, 'Pelos House Rosario Centro', 'San Martín 456, Rosario', '0341-456-7890', 'Estética Integral y Peluquería Unisex', '2025-06-14', NULL),
(13, 'Pelos House Recoleta', 'Av. Santa Fe 789, CABA', '011-4444-5678', 'Centro de estética y cuidado facial con productos naturales. Peluquería Femenina', '2025-06-14', NULL),
(14, 'Pelos House Córdoba Centro', 'Mitre 890, Córdoba', '0351-789-4561', 'Peluqueria Unisex', '2025-06-14', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `turnos`
--

CREATE TABLE `turnos` (
  `id_turno` int(11) NOT NULL,
  `id_sucursal` int(11) NOT NULL,
  `id_cliente` int(11) NOT NULL,
  `id_empleado` int(11) DEFAULT NULL,
  `id_servicio` int(11) NOT NULL,
  `fecha_solicitud` datetime NOT NULL,
  `fecha_turno` date NOT NULL,
  `hora_turno` time NOT NULL,
  `estado` enum('pendiente','confirmado','atendido','cancelado','no_asistió') DEFAULT 'pendiente',
  `observaciones` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `turnos`
--

INSERT INTO `turnos` (`id_turno`, `id_sucursal`, `id_cliente`, `id_empleado`, `id_servicio`, `fecha_solicitud`, `fecha_turno`, `hora_turno`, `estado`, `observaciones`) VALUES
(23, 12, 17, 15, 24, '2025-06-15 12:03:16', '2025-06-15', '11:00:00', 'confirmado', NULL),
(24, 12, 18, 16, 25, '2025-06-15 12:03:16', '2025-06-16', '12:00:00', 'confirmado', NULL),
(25, 13, 21, 19, 27, '2025-06-15 12:04:55', '2025-06-15', '14:00:00', 'confirmado', NULL),
(26, 13, 22, 20, 28, '2025-06-15 12:04:55', '2025-06-16', '15:00:00', 'confirmado', NULL),
(34, 13, 13, 11, 22, '2025-06-29 23:59:47', '2025-06-30', '10:11:00', 'pendiente', 'Belleza natural'),
(35, 11, 13, 19, 21, '2025-06-30 00:16:29', '2025-07-01', '10:00:00', 'confirmado', ''),
(36, 13, 25, 19, 25, '2025-06-30 00:27:08', '2025-06-30', '11:20:00', 'pendiente', ''),
(37, 12, 25, 19, 25, '2025-06-30 20:57:22', '2025-06-30', '21:09:00', 'pendiente', 'Llama para confirmar\nLlama para confirmar');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `id_sucursal` int(11) DEFAULT NULL,
  `nombre` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `telefono` varchar(50) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `tipo_usuario` enum('cliente','empleado') NOT NULL,
  `rol_empleado` enum('supervisor','consulta') DEFAULT NULL,
  `fecha_alta` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `id_sucursal`, `nombre`, `email`, `telefono`, `password`, `tipo_usuario`, `rol_empleado`, `fecha_alta`) VALUES
(11, 11, 'Juan Barber', 'juan.barber@elrastro.com', '1155551111', 'pass123', 'empleado', 'supervisor', '2025-06-14'),
(12, 11, 'Pedro Asistente', 'pedro.asistente@elrastro.com', '1155552222', 'pass123', 'empleado', 'consulta', '2025-06-14'),
(13, 11, 'Carlos Gómez', 'carlos.gomez@gmail.com', '1155553333', 'pass123', 'cliente', NULL, '2025-06-14'),
(14, 11, 'Mario López', 'mario.lopez@gmail.com', '1155554444', 'pass123', 'cliente', NULL, '2025-06-14'),
(15, 12, 'Luis Corte', 'luis.corte@barberbrothers.com', '1166661111', 'pass123', 'empleado', 'supervisor', '2025-06-14'),
(16, 12, 'Sergio Peine', 'sergio.peine@barberbrothers.com', '1166662222', 'pass123', 'empleado', 'consulta', '2025-06-14'),
(17, 12, 'Federico Díaz', 'federico.diaz@gmail.com', '1166663333', 'pass123', 'cliente', NULL, '2025-06-14'),
(18, 12, 'Ramiro Suárez', 'ramiro.suarez@gmail.com', '1166664444', 'pass123', 'cliente', NULL, '2025-06-14'),
(19, 13, 'Andrea Belleza', 'andrea.belleza@bellezanatural.com', '1177771111', 'pass123', 'empleado', 'supervisor', '2025-06-14'),
(20, 13, 'Sofía Spa', 'sofia.spa@bellezanatural.com', '1177772222', 'pass123', 'empleado', 'consulta', '2025-06-14'),
(21, 13, 'Laura Moreno', 'laura.moreno@gmail.com', '1177773333', 'pass123', 'cliente', NULL, '2025-06-14'),
(22, 13, 'Paula Fernández', 'paula.fernandez@gmail.com', '1177774444', 'pass123', 'cliente', NULL, '2025-06-14'),
(23, 14, 'Verónica Glow', 'veronica.glow@glowestetica.com', '1188881111', 'pass123', 'empleado', 'supervisor', '2025-06-14'),
(24, 14, 'Natalia Light', 'natalia.light@glowestetica.com', '1188882222', 'pass123', 'empleado', 'consulta', '2025-06-14'),
(25, 14, 'Camila Torres', 'camila.torres@gmail.com', '1188883333', 'pass123', 'cliente', NULL, '2025-06-14'),
(26, 14, 'Valentina García', 'valentina.garcia@gmail.com', '1188884444', 'pass123', 'cliente', NULL, '2025-06-14');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `rubros_sucursal`
--
ALTER TABLE `rubros_sucursal`
  ADD PRIMARY KEY (`id_rubro_sucursal`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`id_servicio`),
  ADD UNIQUE KEY `uq_negocio_servicio_nombre` (`id_sucursal`,`nombre`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`id_sucursal`),
  ADD KEY `id_rubro_negocio` (`id_rubro_sucursal`);

--
-- Indices de la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD PRIMARY KEY (`id_turno`),
  ADD KEY `id_negocio` (`id_sucursal`),
  ADD KEY `id_cliente` (`id_cliente`),
  ADD KEY `id_empleado` (`id_empleado`),
  ADD KEY `id_servicio` (`id_servicio`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_negocio` (`id_sucursal`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `rubros_sucursal`
--
ALTER TABLE `rubros_sucursal`
  MODIFY `id_rubro_sucursal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `servicios`
--
ALTER TABLE `servicios`
  MODIFY `id_servicio` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  MODIFY `id_sucursal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `turnos`
--
ALTER TABLE `turnos`
  MODIFY `id_turno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD CONSTRAINT `servicios_ibfk_1` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`);

--
-- Filtros para la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD CONSTRAINT `sucursal_ibfk_1` FOREIGN KEY (`id_rubro_sucursal`) REFERENCES `rubros_sucursal` (`id_rubro_sucursal`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `turnos`
--
ALTER TABLE `turnos`
  ADD CONSTRAINT `turnos_ibfk_1` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`),
  ADD CONSTRAINT `turnos_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `turnos_ibfk_3` FOREIGN KEY (`id_empleado`) REFERENCES `usuarios` (`id_usuario`),
  ADD CONSTRAINT `turnos_ibfk_4` FOREIGN KEY (`id_servicio`) REFERENCES `servicios` (`id_servicio`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_sucursal`) REFERENCES `sucursal` (`id_sucursal`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
