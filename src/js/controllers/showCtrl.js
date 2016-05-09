app.controller('showCtrl', ['$scope', '$rootScope', 'apiService', 
  function($scope, $rootScope, apiService){

    $rootScope.$on("show", function(event, args){
      apiService.getProfile(args.id)
        .then(function(profile){
          profile=profile.data.data
          $scope.profile=profile;
          $scope.conversations = false;
          console.log(profile);
        })
        .catch(function(error){
          console.log(error)
        })

      $scope.getConversations= function(matchID){
           apiService.getConversations($rootScope.currentProfileID, matchID)
            .then(function(conversations){
              $scope.conversationList = conversations;
              console.log(conversations);
            })
            .catch(function(error){
              console.log(error);
            })
      }
    });

}]);