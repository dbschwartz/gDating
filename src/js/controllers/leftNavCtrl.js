  app.controller('leftNavCtrl',['apiService', '$scope', function(apiService, $scope){


        $scope.tab = 1;
        if($scope.tab==1){
          apiService.getAllProfiles()
            .then(
              function(profiles){
                $scope.profiles = profiles;
              })
        } 

        if($scope.tab==4){
          console.log('aaa');
            apiService.getMatchProfiles()
              .then(
                function(data) {
                  $scope.matcheProfiles = data;
                  console.log("success",data);
                },
                function(error){
                  console.log("error", error);
                },
                function(update) {
                  console.log("update", update);
              });
          }
        

        $scope.setTab = function(activeTab) {
           $scope.tab = activeTab;
           console.log($scope.tab); 
        };

        
}]);