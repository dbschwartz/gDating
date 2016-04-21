app.controller('userListCtrl'), ['apiService', '$scope', function(scope, element, attrs){
   if(attrs["type"] === 'My Matches'){
     apiService.getMatches().then(function (matches){
        $scope.matches = matches;
     });
   console.log($scope.matches);
  }
}];
