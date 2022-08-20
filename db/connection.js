const mysql = require('mysql2');

// create connection to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username
    user: 'root',
    // Your MySQL password
    password: '1Night1Hero2024!',
    database: 'election'
});

module.exports = db;