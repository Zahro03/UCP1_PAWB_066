// src/routes/router-login.js

const express = require('express');
const router = express.Router();

// Mengimpor controller-login
const controllerLogin = require('../controllers/controller-login');

// Menangani route GET untuk halaman login
router.get('/', controllerLogin);

// Menangani route POST untuk login
router.post('/', controllerLogin.post);

module.exports = router;
