const db = require('../db');

// Mendapatkan semua data bibit
exports.getBibit = (req, res) => {
    db.query('SELECT * FROM bibit', (err, results) => {
        if (err) throw err;
        res.render('bibit', { title: 'Daftar Bibit', bibitList: results });
    });
};

// Menambah data bibit
exports.addBibit = (req, res) => {
    const { name, type, category, quality } = req.body;
    const query = 'INSERT INTO bibit (name, type, category, quality) VALUES (?, ?, ?, ?)';
    db.query(query, [name, type, category, quality], (err, results) => {
        if (err) throw err;
        res.redirect('/bibit');
    });
};

// Menghapus data bibit berdasarkan ID
exports.deleteBibit = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM bibit WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) throw err;
        res.redirect('/bibit');
    });
};
