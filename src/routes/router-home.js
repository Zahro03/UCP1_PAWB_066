// src/routes/router-home.js

const express = require('express');
const router = express.Router();

// Mengimpor controller-home.js
const homeController = require('../controllers/controller-home');

// Definisikan route untuk halaman home
router.get('/', homeController);  // Menyambungkan route dengan controller home

module.exports = router;
