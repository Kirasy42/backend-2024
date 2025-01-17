// Import JWT
import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    // Mengambil token dari header Authorization
    const token = req.headers['authorization']?.split(' ')[1]; // Mengambil token setelah "Bearer"

    if (!token) {
        return res.status(401).json({ message: 'Unauthenticated' });
    }

    // Memverifikasi token
    jwt.verify(token, 'abcd1234', (err, decoded) => {
        if (err) {
            return res.status(422).json({ message: 'Unprocessable entity' });
        }
        // Menyimpan ID pengguna yang terautentikasi ke dalam request
        req.userId = decoded.id;
        next();
    });
};

export default auth;