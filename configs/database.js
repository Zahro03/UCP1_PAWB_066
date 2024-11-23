const mysql = require('mysql2');

// Konfigurasi koneksi
const connection = mysql.createConnection({
    host: 'localhost',       // Host database
    user: 'root',            // Username database
    password: '',            // Password database
    database: 'ucp1_pawb_066' // Nama database yang dibuat
});

// Cek koneksi
connection.connect((err) => {
    if (err) {
        console.error('Koneksi database gagal:', err);
        return;
    }
    console.log('Berhasil terhubung ke database!');
});

module.exports = connection;
