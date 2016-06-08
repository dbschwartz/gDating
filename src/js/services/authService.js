app.service('authService', ['$window', '$http', function($window, $http){
  var baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating/auth';
  function saveToken(token){
    $window.localStorage['gDateToken'] = token;
  }
  function getToken(token){
    return $window.localStorage['gDateToken'];
  }

  function isLoggedIn(){
      var token = getToken();
        if(token){
          var payload = JSON.parse($window.atob(token.split('.')[1]));
          return payload.exp > (Date.now() / 1000)
        } else{
           return false;
        }
     }
  return{
    register: function(user){
      return $http.post(baseURL+'/register', user).then(function(data){
        console.log('inside of register', data);
         saveToken(data.data.data.token);
      })
      .catch(function(err){
        return err;
      })  
     },

     login: function(user){
        return $http.post(baseURL+'/login', user).success(function(data){
          saveToken(  data.data.token);
        })
        .catch(function(err){
          console.log(err);
        })  
     },

     logout: function(){
         $window.localStorage.removeItem('gDateToken');

     },

     isLoggedIn: isLoggedIn,

    currentUser: function(){
      if(isLoggedIn()){
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        console.log(payload);
        return {
          id: payload.sub
        };
      }
    }
  }
      
  
}]);