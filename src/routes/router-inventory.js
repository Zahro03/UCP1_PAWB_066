// src/routes/router-inventory.js

const express = require('express');
const router = express.Router();

// Mengimpor controller-inventory
const controllerInventory = require('../controllers/controller-inventory');

// Menangani route GET untuk halaman inventory
router.get('/', controllerInventory);

module.exports = router;
