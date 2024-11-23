// src/controllers/controller-home.js

const homeController = (req, res) => {
    const userName = req.user ? req.user.username : 'Guest'; // Mengambil nama pengguna dari sesi (atau Guest jika tidak ada)
    
    res.render('home', {
        userName: userName,  // Mengirim data username ke tampilan
        url: req.protocol + '://' + req.get('host') + req.baseUrl // URL dasar untuk navigasi
    });
};

module.exports = homeController;
