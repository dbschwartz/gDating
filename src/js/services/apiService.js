app.service('apiService',['$http', function($http){
    var baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating';
    return {

      getProfile: function(memberID){
        return $http({
          method: 'GET',
          url: baseURL +'/members/'+ memberID
        })
        .then(
          function success(profile){
            return profile
          },
          function error(error) {
            return error
          }
      )}
    }
}]);