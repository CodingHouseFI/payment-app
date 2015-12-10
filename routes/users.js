'use strict';

var express = require('express');
var router = express.Router();

var User = require('../models/user');

// USERS

router.post('/register', function(req, res) {
  console.log('req.body:', req.body)
  User.register(req.body, function(err, user){
    res.status(err || !user ? 400 : 200).send(err || {token: user.token()});
  });
});

router.post('/login', function(req, res) {
  User.authenticate(req.body, function(err, user){
    if(err || !user) {
      res.status(400).send(err);
    } else {
      var token = user.token();
      res.send({token: token});
    }
  });
});

module.exports = router;
