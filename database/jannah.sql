-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 26, 2022 at 01:13 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `jannah`
--

-- --------------------------------------------------------

--
-- Table structure for table `deroods_details`
--

CREATE TABLE IF NOT EXISTS `deroods_details` (
  `id` int(11) NOT NULL,
  `reader_name` varchar(250) NOT NULL,
  `number_count` int(11) NOT NULL,
  `duroods_defaultid` varchar(255) NOT NULL,
  `time_created` time NOT NULL,
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `duroods`
--

CREATE TABLE IF NOT EXISTS `duroods` (
  `id` int(11) NOT NULL,
  `duroods` varchar(250) NOT NULL,
  `duroods_count` int(11) NOT NULL,
  `defaultid` varchar(10) NOT NULL,
  `duroodsdatetime` varchar(250) NOT NULL,
  `time_created` time NOT NULL,
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `khatm`
--

CREATE TABLE IF NOT EXISTS `khatm` (
  `id` int(11) NOT NULL,
  `khatm` varchar(255) NOT NULL,
  `defaultid` varchar(10) NOT NULL,
  `khatmdatetime` varchar(255) NOT NULL,
  `alif_lam_meem_allocated` varchar(255) NOT NULL,
  `alif_lam_meem_read` varchar(255) NOT NULL,
  `sayaqool_allocated` varchar(255) NOT NULL,
  `sayaqool_read` varchar(255) NOT NULL,
  `tilkal_rusull_allocated` varchar(255) NOT NULL,
  `tilkal_rusull_read` varchar(255) NOT NULL,
  `lan_tana_loo_allocated` varchar(255) NOT NULL,
  `lan_tana_loo_read` varchar(255) NOT NULL,
  `wal_mohsanat_allocated` varchar(255) NOT NULL,
  `wal_mohsanat_read` varchar(255) NOT NULL,
  `la_yuhibbullah_allocated` varchar(255) NOT NULL,
  `la_yuhibbullah_read` varchar(255) NOT NULL,
  `wa_iza_samiu_allocated` varchar(255) NOT NULL,
  `wa_iza_samiu_read` varchar(255) NOT NULL,
  `wa_lau_annana_allocated` varchar(255) NOT NULL,
  `wa_lau_annana_read` varchar(255) NOT NULL,
  `qalal_malao_allocated` varchar(255) NOT NULL,
  `qalal_malao_read` varchar(255) NOT NULL,
  `wa_a_lamu_allocated` varchar(255) NOT NULL,
  `wa_a_lamu_read` varchar(255) NOT NULL,
  `yatazeroon_allocated` varchar(255) NOT NULL,
  `yatazeroon_read` varchar(255) NOT NULL,
  `wa_mamin_da_abat_allocated` varchar(255) NOT NULL,
  `wa_mamin_da_abat_read` varchar(255) NOT NULL,
  `wa_ma_ubrioo_allocated` varchar(255) NOT NULL,
  `wa_ma_ubrioo_read` varchar(255) NOT NULL,
  `rubama_allocated` varchar(255) NOT NULL,
  `rubama_read` varchar(255) NOT NULL,
  `subhanallazi_allocated` varchar(255) NOT NULL,
  `subhanallazi_read` varchar(255) NOT NULL,
  `qal_alam_allocated` varchar(255) NOT NULL,
  `qal_alam_read` varchar(255) NOT NULL,
  `aqtarabo_allocated` varchar(255) NOT NULL,
  `aqtarabo_read` varchar(255) NOT NULL,
  `qadd_aflaha_allocated` varchar(255) NOT NULL,
  `qadd_aflaha_read` varchar(255) NOT NULL,
  `wa_qalallazina_allocated` varchar(255) NOT NULL,
  `wa_qalallazina_read` varchar(255) NOT NULL,
  `a_man_khalaq_allocated` varchar(255) NOT NULL,
  `a_man_khalaq_read` varchar(255) NOT NULL,
  `utlu_ma_oohi_allocated` varchar(255) NOT NULL,
  `utlu_ma_oohi_read` varchar(255) NOT NULL,
  `wa_manyaqnut_allocated` varchar(255) NOT NULL,
  `wa_manyaqnut_read` varchar(255) NOT NULL,
  `wa_mali_allocated` varchar(255) NOT NULL,
  `wa_mali_read` varchar(255) NOT NULL,
  `faman_azlam_allocated` varchar(255) NOT NULL,
  `faman_azlam_read` varchar(255) NOT NULL,
  `elahe_yuruddo_allocated` varchar(255) NOT NULL,
  `elahe_yuruddo_read` varchar(255) NOT NULL,
  `ha_a_meem_allocated` varchar(255) NOT NULL,
  `ha_a_meem_read` varchar(255) NOT NULL,
  `qala_fama_khatbukum_allocated` varchar(255) NOT NULL,
  `qala_fama_khatbukum_read` varchar(255) NOT NULL,
  `qadd_sami_allah_allocated` varchar(255) NOT NULL,
  `qadd_sami_allah_read` varchar(255) NOT NULL,
  `tabarakallazi_allocated` varchar(255) NOT NULL,
  `tabarakallazi_read` varchar(255) NOT NULL,
  `amma_yatasa_aloon_allocated` varchar(255) NOT NULL,
  `amma_yatasa_aloon_read` varchar(255) NOT NULL,
  `time_created` time NOT NULL,
  `date_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `deroods_details`
--
ALTER TABLE `deroods_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `duroods`
--
ALTER TABLE `duroods`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `defaultid` (`defaultid`);

--
-- Indexes for table `khatm`
--
ALTER TABLE `khatm`
  ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `defaultid` (`defaultid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `deroods_details`
--
ALTER TABLE `deroods_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `duroods`
--
ALTER TABLE `duroods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `khatm`
--
ALTER TABLE `khatm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
