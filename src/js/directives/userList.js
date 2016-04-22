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
                  console.log($attrs["type"], "yo");
                    if($attrs["type"] == 4){
                      apiService.getMatches().then(function (matches) {
                           $scope.matches = matches;
                           console.log(matches);
                      });
                    }
                }
          };
});
 
    