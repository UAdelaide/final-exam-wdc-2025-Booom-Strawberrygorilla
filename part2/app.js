const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// Routes
const walkRoutes = require('./routes/walkRoutes');
const userRoutes = require('./routes/userRoutes');

const session = require('express-session'); // start Express Session
app.use(session({
  secret: 'dogsecret', // Ensure cookies are not tampered with
  resave: false, // not re-save if not modified
  saveUninitialized: true, //
}));

app.use('/api/walks', walkRoutes);
app.use('/api/users', userRoutes);


// Export the app instead of listening here
module.exports = app;
