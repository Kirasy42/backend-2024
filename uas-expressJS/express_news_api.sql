-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Jan 2025 pada 09.26
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_news_api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(100) NOT NULL,
  `description` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `url` varchar(255) NOT NULL,
  `url_image` varchar(255) NOT NULL,
  `published_at` datetime NOT NULL,
  `category` enum('sport','finance','automotive') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`id`, `title`, `author`, `description`, `content`, `url`, `url_image`, `published_at`, `category`) VALUES
(1, 'Inovasi Terbaru di Dunia Otomotif', 'Jane Smith', 'Berita tentang inovasi terbaru dalam teknologi otomotif.', 'Dalam beberapa tahun terakhir, industri otomotif telah mengalami banyak perubahan. Teknologi baru seperti mobil listrik dan otonom semakin mendominasi pasar. Banyak produsen mobil besar yang berinvestasi dalam penelitian dan pengembangan untuk menciptakan kendaraan yang lebih efisien dan ramah lingkungan.', 'http://example.com/inovasi-terbaru-otomotif', 'http://example.com/images/otomotif.jpg', '2023-10-01 10:00:00', 'automotive'),
(3, 'Inovasi Terbaru di Dunia Finance', 'Hanif', 'Berita tentang inovasi terbaru dalam teknologi otomotif.', 'Dalam beberapa tahun terakhir, industri otomotif telah mengalami banyak perubahan. Teknologi baru seperti mobil listrik dan otonom semakin mendominasi pasar. Banyak produsen mobil besar yang berinvestasi dalam penelitian dan pengembangan untuk menciptakan kendaraan yang lebih efisien dan ramah lingkungan.', 'http://example.com/inovasi-terbaru-otomotif', 'http://example.com/images/otomotif.jpg', '2023-10-01 10:00:00', 'finance');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
