const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Mengimpor routes
const dashboardRoutes = require('./src/routes/router-dashboard');
const pupukRoutes = require('./src/routes/router-pupuk');
const bibitRoutes = require('./src/routes/router-bibit');

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set view engine ke EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', dashboardRoutes);
app.use('/', pupukRoutes);
app.use('/', bibitRoutes);

// Menjalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
