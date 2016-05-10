app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
    })
    
    .when('/register',{
      templateUrl: 'templates/register.html',
      controller: 'registerCtrl'
    })
    
    .when('/login',{
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .when('/allprofiles', {
      templateUrl: 'templates/allProfiles.html',
      controller: 'allProfilesCtrl'
    })

    .when('/matches', {
      templateUrl: 'templates/matches.html',
      controller: 'matchesCtrl'
    })

    .when('/chatting', {
      templateUrl: 'templates/chatting.html',
      controller: 'chattingCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);