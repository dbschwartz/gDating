app.service('apiService',['$http','$q', function($http, $q){
    var baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating';
    var matchIDs = ["5719234249f05f11000fdb81",
                    "5719234249f05f11000fdb8d",
                    "5719234249f05f11000fde21",
                    "5719234249f05f11000fdcea"];
    return {
      getProfile: function(memberID){
        memberID = memberID;
        return $http({
          method: 'GET',
          url: baseURL +'/members/'+ memberID
        })
        .then(function(res){
          return res;

        })
        .catch(function(err){
          return err;
        })
      },
       getAllProfiles: function(){
         return $http({
            method:'GET',
            url: baseURL +'/members?limit=50'
         })
         .then(function(res){
            return res
         })
         .catch(function(err){
            console.log('something went wrong', err);
         })
       },
       getMatches: function(memberID){
        memberID = memberID;
        return $http({
          method: 'GET',
          url: baseURL +'/members/'+ memberID +'/matches'
        })
        .then(function(res){
          matchList=res.data.data;
          return matchList;
        })
        .catch(function(err){
          console.log('something went wrong', err);
        })
      },
       getMatchProfiles: function(matchIDs){
          var deferred= $q.defer();
          var httpCalls = [];
          angular.forEach(matchIDs, function(matchID) {
            console.log(matchID._id);
            httpCalls.push($http.get(baseURL +'/members/'+ matchID._id));
          });
          $q.all(httpCalls)
          .then(
            function(results) {
              var matches = results.map(function (match) {
                return match.data.data;
              });

              console.log('matches', matches);

              deferred.resolve(matches)
            },
            function(errors) {
              deferred.reject(errors)
            },
            function(updates) {
              deferred.update(updates);
            });
          return deferred.promise;
       }
    }
}]);