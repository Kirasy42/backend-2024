// Import Student Controller
import StudentController from '../controller/StudentController.js';

import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello Express');
});

// Routing student
router.get('/students', StudentController.index);
router.post('/students', StudentController.store);
router.put('/students/:id', StudentController.update);
router.delete('/students/:id', StudentController.destroy);

// Export router
export default router;