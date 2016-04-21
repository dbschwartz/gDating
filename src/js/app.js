// sample angular code

var app = angular.module('gDating', ['ngAnimate', 'ngTouch', 'ui.bootstrap', 'ngRoute']);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
