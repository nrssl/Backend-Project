const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// GET /books
router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// POST /books
router.post('/', async (req, res) => {
  const newBook = new Book(req.body);
  const saved = await newBook.save();
  res.status(201).json(saved);
});

module.exports = router;
