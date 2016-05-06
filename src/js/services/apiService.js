app.service('apiService',['$http', function($http){
    var baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating';
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
        var matches=[];
        memberID = memberID || '5719234249f05f11000fdb5f';
        return $http({
          method: 'GET',
          url: baseURL +'/members/'+ memberID
        })
        .then(function(res){
                matchList=res.data.data._matches;
                console.log(matchList);
                matchList.forEach(function(matchID){
                   $http.get(baseURL+'/members/'+matchID)
                    .then(function(match){
                      match=match.data.data;
                      matches.push(match);
                      console.log(matches);
                      })
                     .catch(function(error){
                      console.log(error);
                     })
                })
                console.log(matches);
                return res;
          })
      }
    }
}]);