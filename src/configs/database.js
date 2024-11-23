const mysql = require('mysql2');

// Konfigurasi koneksi ke database MySQL
const dbConfig = {
    multipleStatements: true, // Mengizinkan multiple statements dalam query
    host: 'localhost',        // Host database
    user: 'Zahrooo',          // Username untuk koneksi ke database
    password: '123',          // Password untuk koneksi
    database: 'ucp1_paw'   // Nama database yang digunakan
};

// Membuat koneksi ke MySQL
const connection = mysql.createConnection(dbConfig);

// Menghubungkan ke database MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the MySQL database');
});

module.exports = connection;
