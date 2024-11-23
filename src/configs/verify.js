const jwt = require('jsonwebtoken');

// Secret key untuk memverifikasi JWT
const SECRET_KEY = 'your_secret_key_here';

// Middleware untuk memverifikasi token JWT
const verifyToken = (req, res, next) => {
    // Ambil token dari header Authorization
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

    // Jika token tidak ada, kembalikan error
    if (!token) {
        return res.status(403).json({ message: 'Token is required.' });
    }

    // Verifikasi token menggunakan SECRET_KEY
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid or expired token.' });
        }
        
        // Simpan informasi pengguna yang terdekode ke dalam request untuk digunakan di rute berikutnya
        req.user = decoded;

        // Lanjutkan ke middleware atau rute berikutnya
        next();
    });
};

module.exports = verifyToken;
