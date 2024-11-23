const verifyInput = (req, res, next) => {
    const { name, category, type, quantity, extra_info } = req.body;

    // Validasi data
    if (!name || !category || !type || !quantity) {
        return res.status(400).json({ error: 'Data tidak lengkap. Pastikan semua kolom diisi!' });
    }

    // Validasi tipe dataa
    if (typeof name !== 'string' || typeof category !== 'string' || typeof type !== 'string') {
        return res.status(400).json({ error: 'Kolom name, category, dan type harus berupa teks.' });
    }

    if (typeof quantity !== 'number') {
        return res.status(400).json({ error: 'Kolom quantity harus berupa angka.' });
    }

    // Jika validasi berhasil, lanjut ke middleware berikutnya
    next();
};

module.exports = { verifyInput };
