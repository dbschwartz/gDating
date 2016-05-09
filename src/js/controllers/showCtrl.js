app.controller('showCtrl', ['$scope', '$rootScope', 'apiService', 
  function($scope, $rootScope, apiService){

    $rootScope.$on("show", function(event, args){
      apiService.getProfile(args.id)
        .then(function(profile){
          profile=profile.data.data
          $scope.profile=profile;
          console.log(profile);
        })
        .catch(function(error){
          console.log(error)
        })
    });

}]);