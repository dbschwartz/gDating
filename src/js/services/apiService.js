app.service('apiService',['$http', function($http){
    return {
      getProfile: function(memberID){
        $http({
          method: 'GET',
          url: '/members/'+memberID
        })
        .then(
          function success(profile){
          return profile
        },
          function error(error){
            return error
          }
      });
    }
}]);