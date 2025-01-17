// Import Database
import db from '../config/db.js';

class NewsService {


    // Mengambil semua berita
    static async all() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM news', (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    // Membuat berita baru
    static async create(data) {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO news SET ?', data, (err, result) => {
                if (err) return reject(err);
                resolve({ id: result.insertId, ...data });
            });
        });
    }

    // Mengedit berita yang sudah ada
    static async update(id, data) {
        return new Promise((resolve, reject) => {
            db.query('UPDATE news SET ? WHERE id = ?', [data, id], (err, result) => {
                if (err) return reject(err);
                if (result.affectedRows === 0) return reject(new Error('News not found'));
                resolve({ id, ...data });
            });
        });
    }

    // Menghapus berita yang sudah ada
    static async delete(id) {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM news WHERE id = ?', [id], (err, result) => {
                if (err) return reject(err);
                if (result.affectedRows === 0) return reject(new Error('News not found'));
                resolve({ message: 'News deleted successfully' });
            });
        });
    }

    // Mengambil berita tertentu berdasarkan ID
    static async find(id) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM news WHERE id = ?', [id], (err, result) => {
                if (err) return reject(err);
                if (result.length === 0) return reject(new Error('News not found'));
                resolve(result[0]);
            });
        });
    }

    // Mencari berita berdasarkan judul
    static async search(title) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM news WHERE title LIKE ?', [`%${title}%`], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }

    // Mengambil berita berdasarkan kategori
    static async findByCategory(category) {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM news WHERE category = ?', [category], (err, results) => {
                if (err) return reject(err);
                resolve(results);
            });
        });
    }
}

export default NewsService;