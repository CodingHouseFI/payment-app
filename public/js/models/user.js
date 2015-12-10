'use strict';

var app = angular.module('paymentApp');

app.service('User', function($http, ENV) {
  this.register = function(user) {
    return $http.post(ENV.API_URL + 'users/register', user);
  }
  this.login = function(user) {
    return $http.post(ENV.API_URL + 'users/login', user);
  }

});