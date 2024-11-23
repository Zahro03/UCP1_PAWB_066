// src/routes/router-register.js

const express = require('express');
const router = express.Router();

// Mengimpor controller-register
const controllerRegister = require('../controllers/controller-register');

// Menangani route GET untuk halaman register
router.get('/', controllerRegister);

// Menangani route POST untuk registrasi
router.post('/', controllerRegister.post);

module.exports = router;
