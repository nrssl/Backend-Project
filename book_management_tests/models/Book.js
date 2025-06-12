const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: Number,
  pages: Number
}, { timestamps: true });

module.exports = mongoose.model('Book', bookSchema);