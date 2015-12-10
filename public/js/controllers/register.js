'use strict';

var app = angular.module('paymentApp');

app.controller('registerCtrl', function($scope, $state, User) {

  $scope.submit = function(user) {
    if(user.password !== user.password2){
      swal('Error:', 'Passwords do not match.', 'error');
      return;
    }
    User.register(user)
    .then(function(data){
      $scope.$storage.myToken = res.data.token;
      $state.go('home');

    }, function(err) {
      console.error(err);
    });
  }
});
