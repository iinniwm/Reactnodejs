-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 24, 2023 at 06:52 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node_js`
--

-- --------------------------------------------------------

--
-- Table structure for table `csvfiles`
--

CREATE TABLE `csvfiles` (
  `id` int(11) NOT NULL,
  `first_Name` varchar(255) NOT NULL,
  `last_Name` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `gender` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `csvfiles`
--

INSERT INTO `csvfiles` (`id`, `first_Name`, `last_Name`, `dob`, `gender`, `address`, `phone_number`, `email`, `createdAt`, `updatedAt`) VALUES
(42, 'นิติภูมิ', 'นุชน้อย', '2000-09-25', 'ชาย', 'บ้าน', '062-598-5969', 'nitipoom.nuc@outlook.com', '2023-01-23 16:19:22', '2023-01-23 16:19:22'),
(43, 'นุชน้อย', 'นิติ', '2000-09-26', 'ชาย', 'ปากเกร็ด', '034-125-6789', 'Nitipoom.nuc@clover.com', '2023-01-23 16:19:22', '2023-01-23 16:19:22'),
(44, 'นุชน้อย', 'นิติ', '2000-09-27', 'ชาย', 'ปากเกร็ด', '034-125-6789', 'Nitim.nuc@clover.com', '2023-01-23 16:19:22', '2023-01-23 16:19:22'),
(45, 'นุชน้อย', 'นิติ', '2000-09-27', 'ชาย', 'ปากเกร็ด', '034-125-6790', 'Nitipoom.345@clover.com', '2023-01-23 16:19:22', '2023-01-23 16:19:22'),
(46, 'นุชน้อย', 'นิติ', '2000-09-28', 'ชาย', 'ปากเกร็ด', '034-125-6790', 'Nitipolom.nuc@clover.com', '2023-01-23 16:19:22', '2023-01-23 16:19:22'),
(47, 'นุชน้อย', 'นิติ', '2000-09-28', 'ชาย', 'ปากเกร็ด', '034-125-6791', 'Nitipoomolo.nuc@clover.com', '2023-01-23 16:19:22', '2023-01-23 16:19:22'),
(48, 'นุชน้อย', 'นิติ', '2000-09-29', 'ชาย', 'ปากเกร็ด', '034-125-6791', 'Nitipolloom.nuc@clover.com', '2023-01-23 16:19:22', '2023-01-23 16:19:22');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `csvfiles`
--
ALTER TABLE `csvfiles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `csvfiles`
--
ALTER TABLE `csvfiles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=49;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
