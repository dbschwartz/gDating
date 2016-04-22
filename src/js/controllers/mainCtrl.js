app.controller('mainCtrl',['apiService', '$scope', function(apiService, $scope){
    apiService.getProfile().then(function (user) {
      $scope.profile = user;
    });
    apiService.getMatches().then(function (matches) {
      $scope.matches = matches;
      console.log(matches);
    });
}]);

