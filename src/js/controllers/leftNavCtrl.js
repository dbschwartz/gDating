app.controller('leftNavCtrl',['apiService', '$scope', function(apiService, $scope){
    apiService.getProfile('571667935ae850110075ab19').then(function (user) {
      $scope.profile = user;
    });
        this.tab = 1;

        this.tabIsSet = function(checkTab) {
          return this.tab === checkTab;
        };

        this.setTab = function(activeTab) {
          this.tab = activeTab;
        };
    console.log('hi');   
}]);