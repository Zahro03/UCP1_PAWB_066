const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Mengimpor rute
const homeRoutes = require('./src/routes/router-home');
const loginRoutes = require('./src/routes/router-login');
const registerRoutes = require('./src/routes/router-register');
const inventoryRoutes = require('./src/routes/router-inventory');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Menyajikan file statis (misalnya gambar, stylesheet)
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine ke EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Menggunakan rute
app.use('/', homeRoutes); // Home route
app.use('/login', loginRoutes); // Login route
app.use('/register', registerRoutes); // Register route
app.use('/inventory', inventoryRoutes); // Inventory route

// Menangani error untuk rute yang tidak ditemukan
app.use((req, res, next) => {
    res.status(404).render('404');  // Pastikan Anda memiliki file 404.ejs di folder views
});

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
