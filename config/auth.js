'use strict';

var User = require('../models/user');
var jwt = require('jwt-simple');

module.exports = function(req, res, next){
  var token = req.headers.Authorization.split(' ')[1];

  try {
    var payload = jwt.decode(token, process.env.JWT_SECRET);
  }
  catch(err){
    console.log('error caught:', err);
    return res.status(401).send('Authentication required.');
  }

  var userId = payload._id;

  User.findById(userId, function(err, user){
    if(err || !user) return res.status(401).send(err || 'Authentication required.');
    next();
  });
};
