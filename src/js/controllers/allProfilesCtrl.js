 app.controller('allProfilesCtrl',['apiService', '$scope', '$rootScope', function(apiService, $scope, $rootScope){
  apiService.getAllProfiles()
    .then(function(profiles){
      profiles=profiles.data.data;
      console.log(profiles);
      $scope.profiles = profiles;
    })
    .catch(function(error){
      console.log(error)
    })
      
  $scope.showProfile = function(profileID) {
    $rootScope.$emit("show", {id: profileID});
  }

}]);