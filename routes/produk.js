import express from 'express';

const router = express.Router();

// Data Bibit
let bibit = [
    { id: 1, nama: "Bibit Tomat", kategori: "Sayuran", kualitas: "A" },
    { id: 2, nama: "Bibit Cabai", kategori: "Sayuran", kualitas: "B" },
    { id: 3, nama: "Bibit Jeruk", kategori: "Buah", kualitas: "A" },
    { id: 4, nama: "Bibit Apel", kategori: "Buah", kualitas: "B" }
];

// Data Pupuk
let pupuk = [
    { id: 1, nama: "Pupuk Kandang", jenis: "Organik", jumlah: "15" },
    { id: 2, nama: "Pupuk Kompos", jenis: "Organik", jumlah: "10" },
    { id: 3, nama: "SP-36", jenis: "Anorganik", jumlah: "5" },
    { id: 4, nama: "NPK", jenis: "Anorganik", jumlah: "7" }
];

// Route untuk mendapatkan semua data Bibit
router.get("/bibit", (req, res) => {
    res.json(bibit);
});

// Route untuk mendapatkan semua data Pupuk
router.get("/pupuk", (req, res) => {
    res.json(pupuk);
});

// Route untuk menambah data Bibit
router.post("/bibit", (req, res) => {
    const newBibit = {
        id: bibit.length + 1,
        nama: req.body.nama,
        kategori: req.body.kategori,
        kualitas: req.body.kualitas
    };
    bibit.push(newBibit);
    res.status(201).json(newBibit);
});

// Route untuk menambah data Pupuk
router.post("/pupuk", (req, res) => {
    const newPupuk = {
        id: pupuk.length + 1,
        nama: req.body.nama,
        jenis: req.body.jenis,
        jumlah: req.body.jumlah
    };
    pupuk.push(newPupuk);
    res.status(201).json(newPupuk);
});

// Route untuk menghapus data Bibit
router.delete("/bibit/:id", (req, res) => {
    const bibitIndex = bibit.findIndex((b) => b.id === parseInt(req.params.id));
    if (bibitIndex === -1) return res.status(404).json({ message: "Data bibit tidak ada" });

    const deletedBibit = bibit.splice(bibitIndex, 1)[0];
    res.status(200).json({ message: `Data bibit '${deletedBibit.nama}' telah dihapus` });
});

// Route untuk menghapus data Pupuk
router.delete("/pupuk/:id", (req, res) => {
    const pupukIndex = pupuk.findIndex((p) => p.id === parseInt(req.params.id));
    if (pupukIndex === -1) return res.status(404).json({ message: "Data pupuk tidak ada" });

    const deletedPupuk = pupuk.splice(pupukIndex, 1)[0];
    res.status(200).json({ message: `Data pupuk '${deletedPupuk.nama}' telah dihapus` });
});

// Route untuk update data Bibit
router.put("/bibit/:id", (req, res) => {
    const itemBibit = bibit.find((b) => b.id === parseInt(req.params.id));
    if (!itemBibit) return res.status(404).json({ message: "Data bibit tidak ditemukan" });

    // Perbarui hanya data yang dikirimkan
    itemBibit.nama = req.body.nama || itemBibit.nama;
    itemBibit.kategori = req.body.kategori || itemBibit.kategori;
    itemBibit.kualitas = req.body.kualitas || itemBibit.kualitas;

    res.status(200).json({
        message: `Data bibit dengan ID ${itemBibit.id} telah diperbarui`,
        updatedBibit: itemBibit
    });
});

// Route untuk update data Pupuk
router.put("/pupuk/:id", (req, res) => {
    const itemPupuk = pupuk.find((p) => p.id === parseInt(req.params.id));
    if (!itemPupuk) return res.status(404).json({ message: "Data pupuk tidak ditemukan" });

    // Perbarui hanya data yang dikirimkan
    itemPupuk.nama = req.body.nama || itemPupuk.nama;
    itemPupuk.jenis = req.body.jenis || itemPupuk.jenis;
    itemPupuk.jumlah = req.body.jumlah || itemPupuk.jumlah;

    res.status(200).json({
        message: `Data pupuk dengan ID ${itemPupuk.id} telah diperbarui`,
        updatedPupuk: itemPupuk
    });
});

export default router;
