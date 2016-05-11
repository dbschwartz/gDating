app.controller('showCtrl', ['$scope', '$rootScope', 'apiService', 'authService',
  function($scope, $rootScope, apiService, authService){
   $scope.isLoggedIn = authService.isLoggedIn();
   var currentUser = authService.currentUser();
   console.log($scope.currentUser);

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
           apiService.getConversations(currentUser.id, matchID)
            .then(function(conversations){
              $scope.conversationList = conversations;
              console.log(conversations);
            })
            .catch(function(error){
              console.log(error);
            })
      }

      $scope.postConversation = function(matchID,content){
          apiService.postConversation(currentUser.id, matchID, content)
            .then(function(data){
              console.log(data);
            })
            .catch(function(error){
              console.log(error)
            })
      }
    });

}]);