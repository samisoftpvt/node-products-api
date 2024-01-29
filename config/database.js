require('dotenv').config();
const mysql = require('mysql');

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect to the database and check for any errors
connection.connect(error => {
    if (error) {
        console.error('Error connecting to the database:', error);
        process.exit(1); // Stop the application if there is an issue
    }
    console.log("Successfully connected to the database.");
});

module.exports = connection;
