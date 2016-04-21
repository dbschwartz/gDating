app.controller('mainCtrl',['apiService', '$scope', function(apiService, $scope){
    apiService.getProfile('571667935ae850110075ab19').then(function (user) {
      $scope.profile = user;
    });
    console.log('hi');  
}]);

