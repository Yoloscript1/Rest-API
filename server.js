// server.js
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' });

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Define Port
const PORT = process.env.PORT || 3000;

// Listen on Port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
