// Import the Express.js library
const express = require('express');

// Import the drinks
const drinks = require('./models/drinks.js')

// Create an Express application
const app = express();

// middleware
app.use(express.static("public")) // use a "public" folder for files


// Define a route for the root URL ("/")
app.get('/drinks', (req, res) => {
  res.render("index.ejs",{drinks});
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Express server is running on port 3000');
});