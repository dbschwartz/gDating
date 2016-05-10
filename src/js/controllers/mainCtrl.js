app.controller('mainCtrl',['$scope', '$rootScope', '$location', 'apiService', 'authService', function($scope, $rootScope, $location, apiService, authService){
      $scope.currentPath = $location.path();
      $scope.isLoggedIn = authService.isLoggedIn();
      $scope.currentUser = authService.currentUser();
    // console.log($rootScope.currentProfileID);
    // function profile() {
    //   $rootScope.$emit("currentProfileID", {currentProfileID: '5719234249f05f11000fdb5f'});
    // }
    
    apiService.getProfile($scope.currentUser.id)
      .then(function(profile){
        $scope.profile = profile;
      })

}]);

