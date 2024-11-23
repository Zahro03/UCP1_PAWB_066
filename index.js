import express from 'express';
import produkRoutes from './routes/produk.js'; // Sesuaikan path jika perlu

const app = express();

// Middleware untuk menangani JSON
app.use(express.json());

// Gunakan route produk
app.use('/produk', produkRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
