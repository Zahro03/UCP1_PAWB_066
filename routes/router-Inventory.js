const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

// Rute untuk halaman utama (Home)
router.get('/', (req, res) => {
    res.send('Selamat datang di halaman utama aplikasi Pertanian!');
});

// Rute untuk mengambil semua data inventory
router.get('/inventory', inventoryController.getAllInventory);

// Rute untuk mengambil data inventory berdasarkan ID
router.get('/inventory/:id', inventoryController.getInventoryById);

// Rute untuk menambahkan inventory baru
router.post('/inventory', inventoryController.addInventory);

// Rute untuk mengupdate data inventory berdasarkan ID
router.put('/inventory/:id', inventoryController.updateInventory);

// Rute untuk menghapus data inventory berdasarkan ID
router.delete('/inventory/:id', inventoryController.deleteInventory);

module.exports = router;
