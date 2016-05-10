app.controller('chattingCtrl', ['$scope', '$rootScope', '$location', 'apiService', 'authService', function($scope, $rootScope, $location, apiService, authService){
   $scope.currentPath = $location.path();
   $scope.isLoggedIn = authService.isLoggedIn();
   $scope.currentUser = authService.currentUser();
   apiService.getChatting($scope.currentUser.id)
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