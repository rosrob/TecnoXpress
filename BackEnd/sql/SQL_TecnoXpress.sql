SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tecnoxpress`
-- Creación de la base de datos para MySQL
--

CREATE DATABASE IF NOT EXISTS `tecnoxpress`;

--
-- Selecciona la base de datos recién creada
--

USE `tecnoxpress`;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
`id_usuarios` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(40) NOT NULL,
  `contraseña` VARCHAR(13) NOT NULL,
  `nombre` VARCHAR(60) NOT NULL,
  `apellido` VARCHAR(60) NULL DEFAULT NULL,
  `dni` INT NOT NULL,
  `fecha_de_nacimiento` DATE NULL DEFAULT NULL,
  `direccion` VARCHAR(50) NOT NULL,
  `fecha_registro` DATE NULL DEFAULT NULL,
  `nro_telefonico` VARCHAR(15) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id_usuarios`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4;

-- -------------------------------------------------------------
--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE`roles` (
  `id_roles` INT NOT NULL AUTO_INCREMENT,
  `rol` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_roles`))
ENGINE = InnoDB;

-- ------------------------------------------------------------------
--
-- Estructura de tabla para la tabla `usuario_roles`
--

CREATE TABLE `usuario_roles` (
  `id_usuario_roles` INT NOT NULL AUTO_INCREMENT,
  `id_usuarios` INT NOT NULL,
  `id_roles` INT NOT NULL,
  PRIMARY KEY (`id_usuario_roles`),
  INDEX `fk_usuario_roles_usuarios_idx` (`id_usuarios` ASC) VISIBLE,
  INDEX `fk_usuario_roles_roles1_idx` (`id_roles` ASC) VISIBLE,
  CONSTRAINT `fk_usuario_roles_usuarios`
    FOREIGN KEY (`id_usuarios`)
    REFERENCES `usuarios` (`id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuario_roles_roles1`
    FOREIGN KEY (`id_roles`)
    REFERENCES `roles` (`id_roles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

-- -------------------------------------------------------------
--
-- Estructura de tabla para la tabla `carrito_compras`
--

CREATE TABLE `carrito_compras` (
  `id_carrito_compras` INT NOT NULL AUTO_INCREMENT,
  `id_productos` INT NULL DEFAULT NULL,
  `total` DOUBLE NULL DEFAULT NULL,
  `nro_factura` INT NULL DEFAULT NULL,
  `id_usuarios` INT NOT NULL,
  PRIMARY KEY (`id_carrito_compras`),
  CONSTRAINT `carrito_compras_ibfk_1`
    FOREIGN KEY (`id_productos`)
    REFERENCES `productos` (`id_productos`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_carrito_compras_usuarios1`
    FOREIGN KEY (`id_usuarios`)
    REFERENCES `usuarios` (`id_usuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `codigo_postal`
--

CREATE TABLE `codigo_postal` (
`id_codigo_postal` INT NOT NULL AUTO_INCREMENT,
  `id_usuarios` INT NOT NULL,
  `codigo_postal` INT NOT NULL,
  `localidad` VARCHAR(45) NOT NULL,
  `provincia` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_codigo_postal`),
  INDEX `id_usuarios` (`id_usuarios` ASC) VISIBLE,
  CONSTRAINT `fk_envios_usuarios`
    FOREIGN KEY (`id_usuarios`)
    REFERENCES `tecnoxpress`.`usuarios` (`id_usuarios`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ------------------------------------------------------------------
--
-- Estructura de tabla para la tabla `categoria_productos`
--

CREATE TABLE `categoria_productos` (
  `id_categoria_productos` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`id_categoria_productos`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4;
--
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `detalle_pedido`
--

CREATE TABLE `detalle_pedido` (
  `id_detalle_pedido` INT NOT NULL AUTO_INCREMENT,
  `id_productos` INT NOT NULL,
  `precio_unitario` DOUBLE NOT NULL,
  `cantidad` INT NOT NULL,
  `pedido_id_pedido` INT NOT NULL,
  PRIMARY KEY (`id_detalle_pedido`),
  CONSTRAINT `fk_detalle_pedido_producto`
    FOREIGN KEY (`id_productos`)
    REFERENCES `tecnoxpress`.`productos` (`id_productos`),
  CONSTRAINT `fk__pedido1`
    FOREIGN KEY (`pedido_id_pedido`)
    REFERENCES `tecnoxpress`.`pedido` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id_pedido` INT NOT NULL AUTO_INCREMENT,
  `id_usuarios` INT NOT NULL,
  `fecha_pedido` DATE NOT NULL,
  `id_codigo_postal` INT NOT NULL,
  `id_carrito_compras` INT NOT NULL,
  `id_detalle_pedido` INT NOT NULL,
  PRIMARY KEY (`id_pedido`),
  CONSTRAINT `id_usuarios`
    FOREIGN KEY (`id_usuarios`)
    REFERENCES `usuarios` (`id_usuarios`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_pedido_codigo_postal`
    FOREIGN KEY (`id_codigo_postal`)
    REFERENCES `codigo_postal` (`id_codigo_postal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedido_carrito_compras`
    FOREIGN KEY (`id_carrito_compras`)
    REFERENCES `carrito_compras` (`id_carrito_compras`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id_productos` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL DEFAULT NULL,
  `descripcion` VARCHAR(300) NULL DEFAULT NULL,
  `precio` DOUBLE NULL DEFAULT NULL,
  `stock` INT NULL DEFAULT NULL,
  `id_categoria_productos` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id_productos`),
  CONSTRAINT `fk_categoria_productos`
    FOREIGN KEY (`id_categoria_productos`)
    REFERENCES `categoria_productos` (`id_categoria_productos`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4;

-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `forma_pago`
--

CREATE TABLE `forma_pago` (
  `id_forma_pago` INT NOT NULL AUTO_INCREMENT,
  `metodo` VARCHAR(50) NOT NULL,
  `descripcion` VARCHAR(200) NULL DEFAULT NULL,
  `id_pedido` INT NOT NULL,
  PRIMARY KEY (`id_forma_pago`),
  CONSTRAINT `fk_forma_pago_pedido1`
    FOREIGN KEY (`id_pedido`)
    REFERENCES `pedido` (`id_pedido`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;

-- ----------------------------------------------------------------------------

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

COMMIT;