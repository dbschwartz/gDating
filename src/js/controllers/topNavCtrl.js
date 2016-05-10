  app.controller('topNavCtrl',['$scope', '$rootScope', '$location', 'authService', function($scope, $rootScope, $location, authService){

      $scope.currentPath = $location.path();
      $scope.isLoggedIn = authService.isLoggedIn();
      $scope.currentUser = authService.currentUser();
      $scope.logout = function(){
          console.log("logged out");
          authService.logout();
          $location.path('/');
      }
     
}]);