import NewsModel from '../models/NewsModel.js';

class NewsController {
    // Mengambil semua berita
    static async index(req, res) {
        try {
            const results = await NewsModel.all();
            if (results.length === 0) {
                return res.status(200).json({ message: 'Data is empty' });
            }
            res.status(200).json({ message: 'Get All Resource', data: results });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Menambahkan berita baru
    static async store(req, res) {
        const newsData = req.body;
        try {
            const result = await NewsModel.create(newsData);
            res.status(201).json({ message: 'Resource is added successfully', data: result });
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
            res.status(200).json({ message: 'News updated successfully', data: result });
        } catch (err) {
            if (err.message === 'News not found') {
                return res.status(404).json({ message: 'News not found' });
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
                return res.status(404).json({ message: 'News not found' });
            }
            res.status(500).json({ error: err.message });
        }
    }

    // Mengambil berita tertentu berdasarkan ID
    static async show(req, res) {
        const id = req.params.id;
        try {
            const result = await NewsModel.find(id);
            res.status(200).json({ message: 'Get Detail Resource', data: result });
        } catch (err) {
            if (err.message === 'News not found') {
                return res.status(404).json({ message: 'News not found' });
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
            res.status(200).json({ message: 'Get searched resource', data: results });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Mengambil berita berdasarkan kategori
    static async findByCategory(req, res, category) {
        try {
            const results = await NewsModel.findByCategory(category);
            if (results.length === 0) {
                return res.status(404).json({ message: 'Resource not found' });
            }
            res.status(200).json({ message: `Get ${category} resource`, data: results });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }

    // Mengambil berita kategori sport
    static async sport(req, res) {
        return NewsController.findByCategory(req, res, "sport");
    }

    // Mengambil berita kategori finance
    static async finance(req, res) {
        return NewsController.findByCategory(req, res, "finance");
    }

    // Mengambil berita kategori automotive
    static async automotive(req, res) {
        return NewsController.findByCategory(req, res, "automotive");
    }
}

export default NewsController;