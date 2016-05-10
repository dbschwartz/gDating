(function(){

  'use strict';

  angular.module('gDating')
    .config(appConfig)
    .run(routeChange);

appConfig.$inject= ['$routeProvider', '$httpProvider'];
routeChange.$inject = ['$rootScope', '$location', '$window', 'authService'];

function appConfig($routeProvider, $httpProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl',
      restricted: true,
      preventLoggedIn: false
    })
    
    .when('/register',{
      templateUrl: 'templates/register.html',
      controller: 'registerCtrl',
      restricted: false,
      preventLoggedIn: true
    })
    
    .when('/login',{
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl',
      restricted: false,
      preventLoggedIn: true
    })

    .when('/logout', {
      restricted: true
    })

    .when('/allprofiles', {
      templateUrl: 'templates/allProfiles.html',
      controller: 'allProfilesCtrl',
      restricted: true,
      preventLoggedIn: false
    })

    .when('/matches', {
      templateUrl: 'templates/matches.html',
      controller: 'matchesCtrl',
      restricted: true,
      preventLoggedIn: false
    })

    .when('/chatting', {
      templateUrl: 'templates/chatting.html',
      controller: 'chattingCtrl',
      restricted: true,
      preventLoggedIn: false
    })
    .otherwise({
      redirectTo: '/login'
    });
    $httpProvider.interceptors.push('authInterceptorService')
}

 function routeChange($rootScope, $location, $window, authService) {
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
      // if route us restricted and no token is present
      console.log(next.restricted)
      if(next.restricted && !$window.localStorage.getItem('gDateToken')) {
        $location.path('/login');
      }
      // if token and prevent logging in is true
      if(next.preventLoggedIn && $window.localStorage.getItem('gDateToken')) {
        $location.path('/');
      }
    });
  }

})();