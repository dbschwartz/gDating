app.service('authService', ['$window', function($window){
  var baseURL = 'https://galvanize-student-apis.herokuapp.com/gdating/auth';


  function authService($window){
     var saveToken = function(token) {
      $window.localStorage['gDateToken'] = token;
     }
     var getToken = function (token) {
      return $window.localStorage['gDateToken'];
     }

     var register = function(user){
      return $http.post(baseURL+'/register', user).success(function(data){
         saveToken(data.token);
      });
     };

     var login = function(user){
        return $http.post(baseURL+'/login', user).success(function(data){=
        });
     };

     var logout = function(){
         $window.localStorage.removeItem('gDateToken');
     };

     var isLoggedIn = function(){
      var token = getToken();
        if(token){
          var payload = JSON.parse($window.atob(token.split('.')[1]));
          return payload.exp > Date.now() / 1000;
        } else{
           return false;
        }
     };

    var currentUser = function(){
      if(isLoggedIn()){
        var token = getToken();
        var payload = JSON.parse($window.atob(token.split('.')[1]));
        return {
          id: payload._id;,
          username: payload.username,
          email: payload.email
        };
      }
    };
  
      return{
        saveToken: saveToken,
        getToken: getToken,
        register: register,
        login: login,
        logout: logout
       };
  }
}]);