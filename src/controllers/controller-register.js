// src/controllers/controller-register.js

const controllerRegister = (req, res) => {
    // Jika sudah login, arahkan ke halaman utama
    if (req.user) {
        return res.redirect('/');
    }

    // Jika belum login, tampilkan halaman register
    res.render('register', {
        message: ''  // Tampilkan pesan kesalahan jika ada
    });
};

// Menangani register post request
controllerRegister.post = (req, res) => {
    const { username, password } = req.body;

    // Validasi dan pendaftaran pengguna (contoh sederhana)
    if (username === 'admin' && password === 'password') {
        // Simpan data pengguna (ini hanya contoh, bisa disesuaikan dengan database)
        req.session.user = { username: 'admin' };
        return res.redirect('/');  // Arahkan ke halaman utama setelah pendaftaran sukses
    }

    // Jika registrasi gagal
    res.render('register', {
        message: 'Username sudah digunakan atau password tidak valid'  // Tampilkan pesan kesalahan
    });
};

module.exports = controllerRegister;
