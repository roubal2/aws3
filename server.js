const express = require('express');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const port = 3000;

// MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL!');
});

// Serve static files
app.use(express.static('public'));

// API route to fetch posts
app.get('/api/posts', (req, res) => {
    db.query('SELECT * FROM posts', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/api/posts', (req, res) => {
    connection.query('SELECT * FROM blog_posts', (err, results) => {
        if (err) {
            res.status(500).json({ error: 'Error retrieving posts' });
            return;
        }
        res.json(results);  // Vrátí příspěvky ve formátu JSON
    });
});

