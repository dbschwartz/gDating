app.controller('matchCtrl', ['$scope', 'apiService', function($scope, apiService){
   apiService.getMatchProfiles()
              .then(
                function(data) {
                  $scope.matchProfiles = data;
                  console.log("success",$scope.matchProfiles);
                },
                function(error){
                  console.log("error", error);
                },
                function(update) {
                  console.log("update", update);
              });
}]);