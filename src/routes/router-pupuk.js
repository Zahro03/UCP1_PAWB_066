const express = require('express');
const router = express.Router();
const pupukController = require('../controllers/controller-pupuk');

router.get('/', pupukController);  // Menampilkan pupuk

module.exports = router;
