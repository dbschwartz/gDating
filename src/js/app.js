// sample angular code

var app = angular.module('myApp', ['ngAnimate', 'ngTouch', 'ui.bootstrap', 'ngRoute']);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
