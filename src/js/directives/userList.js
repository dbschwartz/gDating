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
                  apiService.getMatches()
                      .then(function(matches){
                        console.log(matches);
                        $scope.matches = matches;
                      })
                    // if($attrs["type"] === '4'){
                    //       console.log($scope.getprofile);
                    //  }
                   console.log($scope.matches);
                  }
          };
});
 
    