'use strict';

var app = angular.module('paymentApp');

app.controller('loginCtrl', function($scope, $state, $localStorage, User) {
  $scope.submit = function(user) {
    User.login(user)
    .then(function(res){
      debugger;
      $scope.$storage.myToken = res.data.token;
      $state.go('home');
    }, function(err) {
      console.error(err);

    }); 
  }
});
