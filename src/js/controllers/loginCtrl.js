app.controller('loginCtrl', ['$scope', '$rootScope', '$location', 'authService',
  function($scope, $rootScope, $location, authService){
    $scope.credentials = {
      email: "",
      password: ""
    };


    $scope.onSubmit = function() {
      $scope.formError = "";
      authService
        .login($scope.credentials)
        .catch(function(err){
          $scope.formError=err;
        })
        .then(function(){
          $location.path('/');
        });
      };
}]);