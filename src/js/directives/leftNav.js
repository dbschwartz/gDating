app.directive('leftNav', function() {
  return {
    replace: true,
    restrict: "E",
    templateUrl: "js/directives/templates/leftNav.html",
    controller: 'leftNavCtrl'
  }
})