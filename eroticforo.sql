-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-11-2014 a las 20:01:49
-- Versión del servidor: 5.6.20
-- Versión de PHP: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `eroticforo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `erotic_bd`
--

CREATE TABLE IF NOT EXISTS `erotic_bd` (
`id` int(10) unsigned NOT NULL,
  `mensaje` varchar(500) NOT NULL,
  `genero` tinyint(1) NOT NULL,
  `erotico` tinyint(1) NOT NULL,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Volcado de datos para la tabla `erotic_bd`
--

INSERT INTO `erotic_bd` (`id`, `mensaje`, `genero`, `erotico`, `fecha`) VALUES
(1, '', 0, 0, '0000-00-00 00:00:00'),
(2, '', 0, 0, '0000-00-00 00:00:00'),
(3, 'ssssssss', 1, 0, '2014-11-24 20:31:41'),
(4, 'Mi vecino que es 40 aÃ±os mayor que yo me ha dejado embarazada.', 1, 0, '2014-11-24 20:36:27'),
(5, 'Con 70 y para mi vecina todavia soy atractivo', 1, 0, '2014-11-24 20:38:47'),
(6, 'dsdsds', 0, 0, '2014-11-25 18:07:42'),
(7, 'asdasd', 0, 0, '2014-11-25 18:08:09'),
(8, 'wdwdw', 0, 0, '2014-11-25 18:08:19'),
(9, 'sdwewewe', 0, 0, '2014-11-25 18:09:31'),
(10, 'weewewe', 1, 0, '2014-11-25 18:09:39'),
(11, 'fasfwefwq', 1, 1, '2014-11-25 18:09:55'),
(12, 'ewfwefwe', 1, 1, '2014-11-25 18:10:02'),
(13, 'sadfasdfa', 0, 0, '2014-11-25 18:10:35'),
(14, 'asfasf', 1, 0, '2014-11-25 18:10:42'),
(15, 'asfasfasf', 1, 0, '2014-11-25 18:10:49'),
(16, 'ddd', 1, 0, '2014-11-25 18:11:40'),
(17, 'dd', 1, 0, '2014-11-25 18:11:48'),
(18, 'dd', 0, 0, '2014-11-25 18:13:37'),
(19, 'sdsd', 0, 0, '2014-11-25 18:14:18'),
(20, 'fff', 1, 0, '2014-11-25 18:14:27'),
(21, 'rfweewr', 0, 0, '2014-11-25 18:16:37'),
(22, 'errere', 1, 0, '2014-11-25 18:16:45'),
(23, 'rererer', 1, 0, '2014-11-25 18:16:54'),
(24, 'wewewewe', 1, 0, '2014-11-25 18:17:33'),
(25, 'ewewewew', 1, 0, '2014-11-25 18:17:40'),
(26, 'ewewewew', 1, 0, '2014-11-25 18:17:54'),
(27, 'ewewewe', 1, 0, '2014-11-25 18:17:59'),
(28, 'asdsadada', 1, 0, '2014-11-25 18:20:24'),
(29, 'asdasdas', 1, 0, '2014-11-25 18:20:28'),
(30, 'rerererere', 1, 0, '2014-11-25 18:22:17'),
(31, 'rererere', 0, 0, '2014-11-25 18:22:22'),
(32, 'dsdsdsds', 0, 0, '2014-11-25 18:22:40'),
(33, 'dsdsdsdsd', 1, 0, '2014-11-25 18:22:43'),
(34, 'efeffefe', 1, 1, '2014-11-25 18:25:33');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `erotic_bd`
--
ALTER TABLE `erotic_bd`
 ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `erotic_bd`
--
ALTER TABLE `erotic_bd`
MODIFY `id` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=35;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
