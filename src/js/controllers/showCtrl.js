app.controller('showCtrl', ['$scope', '$rootScope', 'apiService', 
  function($scope, $rootScope, apiService){

    $rootScope.$on("show", function(event, args){
      console.log(args.id);
      $scope.id = args.id;
    });

}]);