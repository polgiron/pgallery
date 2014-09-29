-- phpMyAdmin SQL Dump
-- version 3.5.2.2
-- http://www.phpmyadmin.net
--
-- Client: localhost
-- Généré le: Lun 29 Septembre 2014 à 18:22
-- Version du serveur: 5.5.27
-- Version de PHP: 5.4.7

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `pgallery`
--

-- --------------------------------------------------------

--
-- Structure de la table `img`
--

CREATE TABLE IF NOT EXISTS `img` (
  `imgId` int(11) NOT NULL AUTO_INCREMENT,
  `imgTitle` varchar(255) NOT NULL,
  `imgGalleryId` int(11) NOT NULL,
  `imgPlace` int(11) NOT NULL,
  PRIMARY KEY (`imgId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=49 ;

-- --------------------------------------------------------

--
-- Structure de la table `pedit_gallery_settings`
--

CREATE TABLE IF NOT EXISTS `pedit_gallery_settings` (
  `settingId` int(11) NOT NULL AUTO_INCREMENT,
  `settingValue` varchar(255) NOT NULL,
  `settingName` varchar(255) NOT NULL,
  PRIMARY KEY (`settingId`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Contenu de la table `pedit_gallery_settings`
--

INSERT INTO `pedit_gallery_settings` (`settingId`, `settingValue`, `settingName`) VALUES
(1, '0', 'show_thumbs_titles');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
