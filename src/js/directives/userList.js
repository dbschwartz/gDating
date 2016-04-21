app.directive('userList', function() {
  return {
    restrict: "E",
    templateUrl: "/js/directives/templates/userList.html",
    scope: 
          { type: '@'
          }, 
    controller: function(apiService, $scope){
                    if($scope.type === "My Matches"){
                      apiService.getMatches()
                          .then(function (matches){
                            $scope.matches = matches;
                          });
                      console.log($scope.matches);
                      }
                }
          };
});
 
    