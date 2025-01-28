-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 28 يناير 2025 الساعة 15:05
-- إصدار الخادم: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sehatydb`
--

-- --------------------------------------------------------

--
-- بنية الجدول `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `admin` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- إرجاع أو استيراد بيانات الجدول `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `admin`) VALUES
(1, 'admin@gmail.com', '1qa', b'1');

-- --------------------------------------------------------

--
-- بنية الجدول `vecation`
--

CREATE TABLE `vecation` (
  `id` int(11) NOT NULL,
  `id_Vecation` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `id_National` int(10) NOT NULL,
  `nationality` varchar(50) NOT NULL,
  `employer` varchar(50) NOT NULL,
  `name_Physician` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `duration` int(3) NOT NULL,
  `date_Admission` date NOT NULL,
  `date_Discharge` date NOT NULL,
  `date_Lssue` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- إرجاع أو استيراد بيانات الجدول `vecation`
--

INSERT INTO `vecation` (`id`, `id_Vecation`, `name`, `id_National`, `nationality`, `employer`, `name_Physician`, `position`, `duration`, `date_Admission`, `date_Discharge`, `date_Lssue`) VALUES
(1, 'PLS85347', 'بشير صالح عبده ردمان', 123456789, 'يمني', 'السعودية', 'علي صالح المربعي', 'طبيب عام', 3, '2025-01-12', '2025-01-15', '2025-01-26'),
(2, 'PLS68319', 'محمد سعيد المقطري', 345667845, 'يمني', 'السعودية', 'عبد الله سالم الطويل', 'طبيب أسنان', 5, '2025-01-26', '2025-01-31', '2025-01-26'),
(3, 'PLS761015', 'إياد عبد الجليل الشميري', 657897456, 'يمني', 'السعودية', 'محمد صادق الدارمي', 'طبيب باطنية', 9, '2025-01-24', '2025-02-02', '2025-01-26'),
(6, 'PLS79643', 'إبراهيم سالم سعيد ', 657435213, 'يمني', 'السعودية', 'فؤاد جميل السعداني', 'طبيب جراحة', 3, '2025-01-12', '2025-01-15', '2025-01-26'),
(7, 'PLS75809', 'مقبل سالم السعيدي', 658970778, 'قطري', 'السعودية', 'شمسان سعيد ناصر', 'طبيب عام', 2, '2025-01-01', '2025-01-03', '2025-01-26'),
(9, 'PLS61374', 'سعيد شعبان السبعي', 565474977, 'يمني', 'السعودية', 'شعبان المطري', 'طبيب عام', 7, '2025-01-04', '2025-01-11', '2025-01-26');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `vecation`
--
ALTER TABLE `vecation`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `vecation`
--
ALTER TABLE `vecation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
