app.controller('mainCtrl',['$scope', 'apiService', function($scope, apiService){
    apiService.getData()
      .then(function(profile){
        $scope.profile = profile;
      })

}]);

