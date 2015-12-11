'use strict';

var app = angular.module('paymentApp');

app.controller('booksShowCtrl', function($scope, $state, BookService) {
  BookService.show($state.params.bookId)
  .then(function(res) {
    $scope.book = res.data;
  });
});
