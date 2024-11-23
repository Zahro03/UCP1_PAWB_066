const express = require('express');
const router = express.Router();
const homeController = require('../controllers/controller-home');

router.get('/', homeController);  // Menampilkan home

module.exports = router;
