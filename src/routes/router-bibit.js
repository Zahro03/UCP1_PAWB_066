const express = require('express');
const router = express.Router();
const bibitController = require('../controllers/controller-bibit');

router.get('/', bibitController);  // Menampilkan bibit

module.exports = router;
