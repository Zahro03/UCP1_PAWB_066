const db = require('../db');  // Mengimpor koneksi database

// Mendapatkan semua data pupuk dari database
exports.getPupuk = (req, res) => {
    db.query('SELECT * FROM pupuk', (err, results) => {
        if (err) throw err;
        res.render('pupuk', { title: 'Daftar Pupuk', pupukList: results });
    });
};

// Menambah data pupuk ke database
exports.addPupuk = (req, res) => {
    const { name, type, category, quality } = req.body;
    const query = 'INSERT INTO pupuk (name, type, category, quality) VALUES (?, ?, ?, ?)';
    db.query(query, [name, type, category, quality], (err, results) => {
        if (err) throw err;
        res.redirect('/pupuk');
    });
};

// Menghapus data pupuk berdasarkan ID dari database
exports.deletePupuk = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM pupuk WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        res.redirect('/pupuk');
    });
};
