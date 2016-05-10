app.controller('registerCtrl', ['$scope', '$rootScope', '$location', 'authService',
  function($scope, $rootScope, $location, authService){
    $scope.credentials = {
      username: "",
      email: "",
      password: "",
      dob: new Date(),
      firstName: "",
      lastName: "",
      description: ""
    };

    $scope.returnPage = $location.search().page || '/';

    $scope.onSubmit = function() {
      $scope.formError = "";
      authService
        .register($scope.credentials)
        .error(function(err){
          $scope.formError=err;
        })
        .then(function(){
          $location.search('page', null);
          $location.path($scope.returnPage);
        });
      };
}]);