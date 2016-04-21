app.controller('mainCtrl',['apiService', '$scope', function(apiService, $scope){
    apiService.getProfile().then(function (user) {
      $scope.profile = user;
    });
}]);

