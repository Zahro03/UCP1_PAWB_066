// src/controllers/controller-inventory.js

const controllerInventory = (req, res) => {
    // Data contoh untuk inventory (bisa diganti dengan data dari database)
    const inventoryItems = [
        { id: 1, name: 'Pupuk A', quantity: 100 },
        { id: 2, name: 'Bibit B', quantity: 50 },
        { id: 3, name: 'Pupuk C', quantity: 200 }
    ];

    res.render('inventory', {
        items: inventoryItems  // Kirim data inventory ke tampilan
    });
};

module.exports = controllerInventory;
