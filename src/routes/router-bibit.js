const express = require('express');
const router = express.Router();
const bibitController = require('../controllers/controller-bibit');

// Menampilkan semua data bibit
router.get('/bibit', bibitController.getBibit);

// Menambah data bibit
router.post('/bibit', bibitController.addBibit);

// Menghapus data bibit
router.get('/bibit/delete/:id', bibitController.deleteBibit);

module.exports = router;
