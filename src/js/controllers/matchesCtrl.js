app.controller('matchesCtrl', ['$scope', '$rootScope', '$location', 'apiService', 'authService', function($scope, $rootScope, $locationService, apiService, authService){
  $scope.currentPath = $location.path();
  $scope.isLoggedIn = authService.isLoggedIn();
  $scope.currentUser = authService.currentUser();
   apiService.getMatches($scope.currentUser.id)
      .then(
        function(data) {
          console.log(data)
          $scope.matchProfiles = data;
          // console.log("success",$scope.matchProfiles);
        })
      .then(function(){
        apiService.getMatchProfiles($scope.matchProfiles)
          .then(
            function(data){
              $scope.matches=data;
          })
      })
}]);