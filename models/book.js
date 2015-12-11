'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Book;

var bookSchema = Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  createdAt: { type: Date, required: true, default: Date.now() }
});

Book = mongoose.model('Book', bookSchema);

module.exports = Book;
