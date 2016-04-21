app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: '/templates/main.html',
      controller: 'mainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);