const express = require('express');
const app = express();
app.use(express.json());

app.get('/books', (req, res) => {
  res.json([]);
});

app.post('/books', (req, res) => {
  res.status(201).json({ _id: '1', ...req.body });
});

module.exports = app;
