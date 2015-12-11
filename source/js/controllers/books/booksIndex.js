'use strict';

var app = angular.module('paymentApp');

app.controller('booksIndexCtrl', function($scope, $state, BookService) {
  BookService.index()
  .then(function(res) {
    $scope.books = res.data;
  }, function(err) {
    console.error(err);
  });

});
