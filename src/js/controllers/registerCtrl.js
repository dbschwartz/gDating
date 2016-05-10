app.controller('registerCtrl', ['$scope', '$rootScope', '$location', 'authService',
  function($scope, $rootScope, $location, authService){
    $scope.credentials = {
      username: "",
      email: "",
      password: "",
      dob: "",
      firstName: "",
      lastName: "",
      description: "",
      address:{
        geo:{
          lng: 104.992588,
          lat: 39.733513
        }
      } 
    };


    $scope.onSubmit = function() {
      $scope.formError = "";
      authService
        .register($scope.credentials)
        .catch(function(err){
          $scope.formError=err;
        })
        .then(function(){
          $location.path('/');
        });
      };
}]);