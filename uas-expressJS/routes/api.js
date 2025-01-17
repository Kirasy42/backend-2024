import express from 'express';
import NewsController from '../controllers/NewsController.js';

const router = express.Router();

router.get('/news', NewsController.index);
router.post('/news', NewsController.store);
router.put('/news/:id', NewsController.update);
router.delete('/news/:id', NewsController.destroy);
router.get('/news/:id', NewsController.show);
router.get('/news/search/:title', NewsController.search);
router.get('/news/category/sport', NewsController.sport);
router.get('/news/category/finance', NewsController.finance);
router.get('/news/category/automotive', NewsController.automotive);

export default router;