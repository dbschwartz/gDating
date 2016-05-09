app.controller('matchesCtrl', ['$scope', '$rootScope', 'apiService', function($scope, $rootScope, apiService){
   apiService.getMatches($rootScope.currentProfileID)
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