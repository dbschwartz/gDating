app.controller('chattingCtrl', ['$scope', '$rootScope', 'apiService', function($scope, $rootScope, apiService){
   console.log($rootScope.currentProfileID);
   apiService.getChatting($rootScope.currentProfileID)
      .then(
        function(data) {
          console.log(data)
          $scope.chattingProfiles = data;
        })
      .then(function(){
        apiService.getMatchProfiles($scope.chattingProfiles)
          .then(
            function(data){
              $scope.chatting=data;
          })
      })
}]);