app.controller('showCtrl', ['$scope', '$rootScope', 'apiService', 'authService',
  function($scope, $rootScope, apiService, authService){
   $scope.isLoggedIn = authService.isLoggedIn();
   currentUser = authService.currentUser();
   $scope.message = {
    _recipient: "",
    content: ""
   };

    $rootScope.$on("show", function(event, args){
      apiService.getProfile(args.id)
        .then(function(profile){
          profile=profile.data.data
          $scope.profile=profile;
          $scope.conversations = false;
          $scope.message._recipient = profile._id
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

      $scope.postConversation = function(){
          apiService.postConversation(currentUser.id, $scope.message)
            .then(function(data){
              console.log(data);
              $scope.getConversations($scope.message._recipient)
            })
            .catch(function(error){
              console.log(error)
            })
      }
    });

}]);