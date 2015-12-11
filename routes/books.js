'use strict';

var express = require('express');
var router = express.Router();

var Book = require('../models/book');

router.get('/', function(req, res) {
  Book.find({}, function(err, books) {
    res.status(err ? 400 : 200).send(err || books);
  });
});

router.get('/:id', function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    res.status(err ? 400 : 200).send(err || book);
  });
});

router.post('/', function(req, res) {
  Book.create(req.body, function(err, book) {
    res.status(err ? 400 : 200).send(err || book);
  });
});

module.exports = router;
