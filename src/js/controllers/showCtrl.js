app.controller('showCtrl', ['$scope', '$rootScope', 'apiService', 'authService',
  function($scope, $rootScope, apiService, authService){
   $scope.isLoggedIn = authService.isLoggedIn();
   currentUser = authService.currentUser();
   $scope.message = {
    _recipient: "",
    content: ""
   };
   $scope.profileLoaded =false;

   $scope.recipient= "";

    $rootScope.$on("show", function(event, args){
      $scope.profileLoaded = true;
      apiService.getProfile(args.id)
        .then(function(profile){
          profile=profile.data.data
          $scope.profile=profile;
          $scope.conversations = false;
          $scope.message._recipient = profile._id
          $scope.recipient= profile.username;

          console.log('profile',profile);
        })
        .catch(function(error){
          console.log(error)
        })

      $scope.getConversations= function(matchID){
        console.log('getConversations', $scope.recipient);
              $scope.conversationList = [];
           apiService.getConversations(currentUser.id, matchID)
            .then(function(conversations){
              console.log('conversations',conversations)
              if(conversations["0"].messages){
              var formattedConversation = conversations[0].messages.map(function(message){
                var instanceObj = {};
                if(message._sender === currentUser.id){
                  instanceObj._sender = "You";
                } else{
                   instanceObj._sender = $scope.recipient;
                  }
                instanceObj.content = message.content;
                return instanceObj
                })
               
              $scope.conversationList = formattedConversation;
            }
            else{
              console.log(conversations);
              $scope.conversationList = [];

            }
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
              $scope.message = {
                   _recipient: "",
                    content: ""
                 };
            })
            .catch(function(error){
              console.log(error)
            })
      }
    });

}]);