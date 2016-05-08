app.service('apiService',['$http','$q', function($http, $q){
    var baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating';
    var matchIDs = ["5719234249f05f11000fdb81",
                    "5719234249f05f11000fdb8d",
                    "5719234249f05f11000fde21",
                    "5719234249f05f11000fdcea"];
    return {
      getData: function(memberID){
        memberID = memberID || '5719234249f05f11000fdb5f';
        return $http({
          method: 'GET',
          url: baseURL +'/members/'+ memberID
        })
        .then(function(res){
          console.log(res.data.data._matches);
          return res;

        })
        .catch(function(err){
          return err;
        })
      },
       getMatches: function(memberID){
        memberID = memberID || '5719234249f05f11000fdb5f';
        return $http({
          method: 'GET',
          url: baseURL +'/members/'+ memberID
        })
        .then(function(res){
          var matches;
          matchList=res.data.data._matches;
          matchList.forEach(function(){

          })
        })
        .catch(function(err){
          console.log('something went wrong');
        })
      },
       getMatchProfiles: function(){

          var deferred= $q.defer();
          var httpCalls = [];
          angular.forEach(matchIDs, function(matchID) {
            httpCalls.push($http.get(baseURL +'/members/'+ matchID));
          });
          $q.all(httpCalls)
          .then(
            function(results) {
              deferred.resolve(JSON.stringify(results))
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