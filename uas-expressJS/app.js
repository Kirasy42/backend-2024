// Import Module yang diperlukan
import express from 'express';
import dotenv from 'dotenv';
import newsRoutes from './routes/api.js';
import auth from './middlewares/auth.js';

// Gunakan config dotEnv
dotenv.config();

// Masukkan expressJS module kedalam constanta app
const app = express();

// Lakukan Deconstruction terhadap Var Port
const { APP_PORT } = process.env;

app.use(express.json());

// JANGAN LUPA Gunakan link "api/" misalkan "http://localhost:3000/api/news/search" 
app.use('/api', auth, newsRoutes);

app.listen(APP_PORT, () => {
    console.log(`Server is running on http://localhost:${APP_PORT}`);
});