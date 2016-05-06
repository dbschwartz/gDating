  app.controller('leftNavCtrl',['apiService', '$scope', function(apiService, $scope){

        $scope.tab = 0; 

        if($scope.tab==4){
              apiService.getMatches()
              .then(function(matches){
                console.log(matches);
              })
          }

        $scope.setTab = function(activeTab) {
           $scope.tab = activeTab;
           console.log($scope.tab); 
        };

     
}]);