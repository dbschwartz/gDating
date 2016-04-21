app.controller('leftNavCtrl',['apiService', '$scope', function(apiService, $scope){
    apiService.getProfile().then(function (user) {
      $scope.profile = user;
    });
        var tab; 

        $scope.tabIsSet = function(checkTab) {
          return tab === checkTab;
        };

        $scope.setTab = function(activeTab) {
          tab = activeTab;
        };

    console.log(tab);   
}]);