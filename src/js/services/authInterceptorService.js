app.service('authInterceptorService',  ['$window', function($window){

  return{
    request: function(config){
      var token =  $window.localStorage['gDateToken'];
      if(token){
        config.headers.Authorization = "Bearer " + token;
      } 
      return config;
    }
  }

}]);