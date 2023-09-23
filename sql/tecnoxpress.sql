-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-09-2023 a las 02:07:30
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
-- Base de datos: `tecnoxpress`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrito_compras`
--

CREATE TABLE `carrito_compras` (
  `id` int(11) NOT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_usuarios` int(11) DEFAULT NULL,
  `total` float DEFAULT NULL,
  `nro_factura` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `carrito_compras`
--

INSERT INTO `carrito_compras` (`id`, `id_producto`, `id_usuarios`, `total`, `nro_factura`) VALUES
(1, 3, 3, 2300000, 1),
(2, 5, 1, 75000, 2),
(3, 1, 4, 1600000, 3),
(4, 6, 2, 16000, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_productos`
--

CREATE TABLE `categoria_productos` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) DEFAULT NULL,
  `id_productos` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categoria_productos`
--

INSERT INTO `categoria_productos` (`id`, `tipo`, `id_productos`) VALUES
(1, 'Computadoras/ CPU', 1),
(2, 'Memorias', 5),
(3, 'Mouse', 4),
(4, 'Notebook Dell', 2),
(5, 'Notebook Lenovo', 3),
(6, 'Teclados', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id` int(11) NOT NULL,
  `id_pedido` int(11) NOT NULL,
  `id_productos` int(11) NOT NULL,
  `precio_unitario` float NOT NULL,
  `cantidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_pedido`
--

INSERT INTO `detalle_pedido` (`id`, `id_pedido`, `id_productos`, `precio_unitario`, `cantidad`) VALUES
(1, 3, 1, 1600000, 1),
(2, 4, 6, 8000, 2),
(3, 1, 3, 2300000, 1),
(4, 2, 5, 25000, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `id_usuarios` int(11) NOT NULL,
  `fecha_pedido` date NOT NULL,
  `id_compras` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id`, `id_usuarios`, `fecha_pedido`, `id_compras`) VALUES
(1, 3, '2023-09-10', 1),
(2, 1, '2023-09-13', 2),
(3, 4, '2023-09-15', 3),
(4, 2, '2023-09-17', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `descripcion` varchar(300) DEFAULT NULL,
  `precio` float DEFAULT NULL,
  `stock` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `descripcion`, `precio`, `stock`) VALUES
(1, 'IMac 24\" Retina-4.5k', 'M1-chip 8 core- CPU 7 nucleos, 256 GB disco SSD. Ram\r\n8 MB. Resolucion pantalla 4480x2520 LED. S.O: macOS\r\n11.5 Big Sur', 1600000, 2),
(2, 'Notebook Dell Inspiron 3511-R6DCW', 'Intel core i3 11 va generacion, 256GB disco SSD2\r\nvelocidad 4.1GHz, RAM 8GB pantalla 15.6” resolución\r\n1366x768 S.O: Windows 11 Home.', 500000, 7),
(3, 'Notebook gamer Lenovo Legion 15ACH6H', 'Pantalla 15,6” resolucion 2560x1440px, procesador AMD\r\nRyzen 5, RAM 16GB, placa de video NVIDIA Geforce\r\nRXT 3060, 6 puertos USB, wifi y bluetooth', 2300000, 3),
(4, 'Mouse Red Dragon Griffin 607', 'Color blanco/negro, sensor optico PixArt P3212 gamer,\r\nresolución 7200 dpi, 7 botones programables\r\npersonalizados, rueda navegación, conexión USB', 30000, 3),
(5, 'GygaByte Memoria RAM', 'Modelo ddr4 8GB, modulos de memoria ram 1x8Gb.\r\nCapacidad total 8 GB.', 25000, 1),
(6, 'Noganet Modelo 78005 teclado', 'Teclado común Noganet, diseño ergonomico, color negro idioma Español', 8000, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `username` varchar(40) DEFAULT NULL,
  `contraseña` varchar(13) DEFAULT NULL,
  `fecha_registro` date DEFAULT NULL,
  `nombre` varchar(60) NOT NULL,
  `dni` int(11) NOT NULL,
  `direccion` varchar(50) NOT NULL,
  `rol` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `username`, `contraseña`, `fecha_registro`, `nombre`, `dni`, `direccion`, `rol`) VALUES
(1, 'domi@gmail.com', 'domi90messi2', '2023-09-02', 'Domingo Sarmiento', 10563888, 'Av. Colon 258 P 8 Dpto \"A\"', 'cliente'),
(2, 'velezd1@gmail.com', '58soyCordobe', '2023-09-08', 'Dalmacio Vélez', 12760000, 'Rondo 450', 'cliente'),
(3, 'juani3@yahoo.com', 'chayan3fanyo', '2023-09-10', 'Juana Azurduy', 30896111, '9 de Julio 2520', 'cliente'),
(4, 'rroca@hotmail.com', '123roci67nos', '2023-09-15', 'Rocio Roca', 19560333, '25 de mayo 856', 'cliente'),
(5, 'liolo@gmail.com', 'el10soy89si7', '2023-09-01', 'Lionel Lopez', 30253789, 'Zapala 2563', 'administrador'),
(6, 'marub@gmail.com', 'diva2000maru', '2023-09-01', 'Maria Beces', 36745656, 'Las Lilas 85', 'administrador');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrito_compras`
--
ALTER TABLE `carrito_compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_cliente` (`id_usuarios`),
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `categoria_productos`
--
ALTER TABLE `categoria_productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_categoria_productos_productos` (`id_productos`);

--
-- Indices de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_pedido` (`id_pedido`),
  ADD KEY `id_productos` (`id_productos`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usuarios` (`id_usuarios`),
  ADD KEY `id_compras` (`id_compras`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrito_compras`
--
ALTER TABLE `carrito_compras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `categoria_productos`
--
ALTER TABLE `categoria_productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `detalle_pedido`
--
ALTER TABLE `detalle_pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrito_compras`
--
ALTER TABLE `carrito_compras`
  ADD CONSTRAINT `carrito_compras_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `productos` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carrito_compras_ibfk_2` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `categoria_productos`
--
ALTER TABLE `categoria_productos`
  ADD CONSTRAINT `fk_categoria_productos_productos` FOREIGN KEY (`id_productos`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `id_compras` FOREIGN KEY (`id_compras`) REFERENCES `carrito_compras` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `id_usuarios` FOREIGN KEY (`id_usuarios`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pedido_ibfk_1` FOREIGN KEY (`id`) REFERENCES `detalle_pedido` (`id_pedido`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
