const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'R00tP4ss69',
        database: 'managment'
    },
    console.log('Connected to the database.')
);

module.exports = db;