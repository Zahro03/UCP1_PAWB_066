const express = require('express');
const router = express.Router();
const pupukController = require('../controllers/controller-pupuk');

// Menampilkan semua data pupuk
router.get('/pupuk', pupukController.getPupuk);

// Menambah data pupuk
router.post('/pupuk', pupukController.addPupuk);

// Menghapus data pupuk
router.get('/pupuk/delete/:id', pupukController.deletePupuk);

module.exports = router;
