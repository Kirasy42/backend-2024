import express from 'express';
import auth from '../middlewares/auth.js';
import NewsController from '../controllers/NewsController.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Welcome to NEWS API");
});

router.get('/news', NewsController.index);
router.post('/news', auth, NewsController.store);
router.put('/news/:id', auth, NewsController.update);
router.delete('/news/:id', auth, NewsController.destroy);
router.get('/news/:id', auth, NewsController.show);
router.get('/news/search/:title', auth, NewsController.search);
router.get('/news/category/sport', auth, NewsController.sport);
router.get('/news/category/finance', auth, NewsController.finance);
router.get('/news/category/automotive', auth, NewsController.automotive);

export default router;