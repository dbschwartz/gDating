app.controller('leftNavCtrl',['apiService', '$scope', function(apiService, $scope){
    apiService.getProfile().then(function (user) {
      $scope.profile = user;
    });
        $scope.tab =0; 

        $scope.tabIsSet = function(checkTab) {
          return $scope.tab === checkTab;
        };

        $scope.setTab = function(activeTab) {
          $scope.tab = activeTab;
        };

    console.log($scope.tab);   
}]);