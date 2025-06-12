const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

function checkAdmin(req, res, next) {
  if (req.query.admin === 'true') return next();
  return res.status(403).send('Access denied');
}

router.get('/', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

router.get('/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

router.post('/', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.status(201).json(book);
});

router.put('/:id', checkAdmin, async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

router.delete('/:id', checkAdmin, async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).send('Book not found');
  res.send('Book deleted');
});

module.exports = router;