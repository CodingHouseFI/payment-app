'use strict';

var app = angular.module('paymentApp');

app.controller('booksShowCtrl', function($scope, $state, $http, ENV, BookService) {
  BookService.show($state.params.bookId)
  .then(function(res) {
    $scope.book = res.data;
  });

  $scope.doCheckout = function(tokenObj) {
    $http.post(`${ENV.API_URL}/checkout`, {
      tokenObj: tokenObj,
      book: $scope.book
    })
    .then(function(res) {
      console.log('res:', res);
    }, function(err) {
      console.log('err:', err);
    })
  };

  $scope.formatPrice = function(num) {
    return Math.round(num * 100);
  };
});

