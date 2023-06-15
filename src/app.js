const fs = require('fs');
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Load movie data from JSON file

// POST /movies
app.post('/movies', (req, res) => {
  // Post Movie Details
});

module.exports = app;
