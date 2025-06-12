const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');
const logger = require('./middleware/logger');
const checkJson = require('./middleware/checkJson');
require('dotenv').config();

const app = express();

// Middleware
app.use(logger);
app.use(express.json());
app.use(checkJson);

// Routes
app.use('/books', bookRoutes);

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
