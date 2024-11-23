// src/controllers/controller-login.js

const controllerLogin = (req, res) => {
    // Jika sudah login, arahkan ke halaman utama
    if (req.user) {
        return res.redirect('/');
    }

    // Jika belum login, tampilkan halaman login
    res.render('login', {
        message: ''  // Tampilkan pesan kesalahan jika ada
    });
};

// Menangani login post request
controllerLogin.post = (req, res) => {
    const { username, password } = req.body;

    // Validasi dan autentikasi pengguna (ini hanya contoh sederhana)
    if (username === 'admin' && password === 'password') {
        req.session.user = { username: 'admin' };  // Simpan sesi pengguna
        return res.redirect('/');  // Arahkan ke halaman utama
    }

    // Jika login gagal
    res.render('login', {
        message: 'Invalid username or password'  // Tampilkan pesan kesalahan
    });
};

module.exports = controllerLogin;
