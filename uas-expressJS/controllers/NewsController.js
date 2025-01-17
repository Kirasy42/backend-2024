import NewsModel from '../models/NewsModel.js';

class NewsController {
    // Mengambil semua berita
    static async index(req, res) {
        try {
            const results = await NewsModel.all();
            if (results.length === 0) {
                return res.status(204).json({ message: 'No content to send' });
            }
            res.status(200).json({ message: 'The request succeeded', data: results });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Menambahkan berita baru
    static async store(req, res) {
        const newsData = req.body;
        try {
            const result = await NewsModel.create(newsData);
            res.status(201).json({ message: 'Resource created', data: result });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Memperbarui berita yang sudah ada
    static async update(req, res) {
        const id = req.params.id;
        const newsData = req.body;
        try {
            const result = await NewsModel.update(id, newsData);
            res.status(200).json({ message: 'The request succeeded', data: result });
        } catch (err) {
            if (err.message === 'News not found') {
                return res.status(404).json({ message: 'Resource not found' });
            }
            res.status(500).json({ error: err.message });
        }
    }

    // Menghapus berita yang sudah ada
    static async destroy(req, res) {
        const id = req.params.id;
        try {
            const result = await NewsModel.delete(id);
            res.status(204).json(result);
        } catch (err) {
            if (err.message === 'News not found') {
                return res.status(404).json({ message: 'Resource not found' });
            }
            res.status(500).json({ error: err.message });
        }
    }

    // Mengambil berita tertentu berdasarkan ID
    static async show(req, res) {
        const id = req.params.id;
        try {
            const result = await NewsModel.find(id);
            res.status(200).json({ message: 'The request succeeded', data: result });
        } catch (err) {
            if (err.message === 'News not found') {
                return res.status(404).json({ message: 'Resource not found' });
            }
            res.status(500).json({ error: err.message });
        }
    }

    // Mencari berita berdasarkan judul
    static async search(req, res) {
        const title = req.params.title;
        try {
            const results = await NewsModel.search(title);
            if (results.length === 0) {
                return res.status(404).json({ message: 'Resource not found' });
            }
            res.status(200).json({ message: 'The request succeeded', data: results });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Mengambil berita kategori sport
    static async sport(req, res) {
        try {
            const results = await NewsModel.findByCategory("sport");
            if (results.length === 0) {
                return res.status(404).json({ message: 'Resource not found' });
            }
            res.status(200).json({ message: `The request succeeded`, data: results });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Mengambil berita kategori finance
    static async finance(req, res) {
        try {
            const results = await NewsModel.findByCategory("finance");
            if (results.length === 0) {
                return res.status(404).json({ message: 'Resource not found' });
            }
            res.status(200).json({ message: `The request succeeded`, data: results });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Mengambil berita kategori automotive
    static async automotive(req, res) {
        try {
            const results = await NewsModel.findByCategory("automotive");
            if (results.length === 0) {
                return res.status(404).json({ message: 'Resource not found' });
            }
            res.status(200).json({ message: `The request succeeded`, data: results });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default NewsController;