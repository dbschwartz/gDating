app.controller('mainCtrl',['$scope', '$rootScope', 'apiService', function($scope, $rootScope, apiService){
    $rootScope.currentProfileID = '5719234249f05f11000fdb5f';
    // console.log($rootScope.currentProfileID);
    // function profile() {
    //   $rootScope.$emit("currentProfileID", {currentProfileID: '5719234249f05f11000fdb5f'});
    // }
    
    apiService.getProfile($rootScope.currentProfileID)
      .then(function(profile){
        $scope.profile = profile;
      })

}]);

