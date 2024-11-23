const inventoryService = require('../services/inventoryService');

// Mengambil semua data
const getAllInventory = async (req, res) => {
    try {
        const data = await inventoryService.getAllInventory();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data.' });
    }
};

// Mengambil dataa berdasarkan ID
const getInventoryById = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await inventoryService.getInventoryById(id);
        if (!data) {
            return res.status(404).json({ error: 'Data tidak ditemukan.' });
        }
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengambil data.' });
    }
};

// Menambahkan data baruu
const addInventory = async (req, res) => {
    const { name, category, type, quantity, extra_info } = req.body;
    try {
        const newId = await inventoryService.addInventory({
            name,
            category,
            type,
            quantity,
            extra_info,
        });
        res.status(201).json({ message: 'Data berhasil ditambahkan!', id: newId });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menambahkan data.' });
    }
};

// Mengupdate dataa
const updateInventory = async (req, res) => {
    const { id } = req.params;
    const { name, category, type, quantity, extra_info } = req.body;

    try {
        const updated = await inventoryService.updateInventory(id, {
            name,
            category,
            type,
            quantity,
        });

        if (!updated) {
            return res.status(404).json({ error: 'Data tidak ditemukan.' });
        }

        res.status(200).json({ message: 'Data berhasil diupdate!' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal mengupdate data.' });
    }
};

// Menghapus dataa
const deleteInventory = async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await inventoryService.deleteInventory(id);

        if (!deleted) {
            return res.status(404).json({ error: 'Data tidak ditemukan.' });
        }

        res.status(200).json({ message: 'Data berhasil dihapus!' });
    } catch (error) {
        res.status(500).json({ error: 'Gagal menghapus data.' });
    }
};

module.exports = {
    getAllInventory,
    getInventoryById,
    addInventory,
    updateInventory,
    deleteInventory,
};
