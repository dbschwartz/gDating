app.directive('userList', function() {
  return {
    restrict: "E",
    templateUrl: "/js/directives/templates/userList.html",
    scope: 
          { type: '@'
          }, 
    link: function(scope, elem, attrs) {
    },
    controller: function(apiService, $scope, $element, $attrs){
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
          }
}
});
 
    