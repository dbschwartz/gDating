// sample angular code

var app = angular.module('gDating', ['ngAnimate', 'ngTouch', 'ui.bootstrap', 'ngRoute'], function config($httpProvider){
  $httpProvider.interceptors.push('authInterceptorService')
});