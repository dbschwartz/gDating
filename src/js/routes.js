app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html',
      controller: 'mainCtrl'
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