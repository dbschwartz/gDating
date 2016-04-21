app.service('apiService',['$http', function($http){
    var baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating';
    var profile = {};
    return {

      getProfile: function(memberID){

        memberID = memberID || '5719234249f05f11000fdb5f';
        return $http({
          method: 'GET',
          url: baseURL +'/members/'+ memberID
        })
        .then(
          function success(data){
            profile = data;
            return profile
          },
          function error(error) {
            return error
          }
      )},
      getMatches: function(){
        if (Object.keys(profile).length !== 0){   //Single Page Application Style
                 return profile.data.matches;
        }
        else{
          return this.getProfile()
          .then(function(profile){
            return profile.data.matches;
          })
 
        }
      }
    }
}]);