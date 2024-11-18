// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to serve static files (CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Route for the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// API endpoint to check server status
app.get('/api/status', (req, res) => {
    res.json({ message: 'Server is up and running' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

