// MODULE
var angularApp = angular.module("angularApp", [
  "ngMessages",
  "ngResource",
  "ngRoute"
]); // array of dependencies, we can add different Angular modules that we have added to html script as string to the array(dependencies)

// Internal Routing
angularApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController"
    })
    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController"
    });
});

// CONTROLLERS
// angularApp.controller("mainController", ["$scope", function($scope) {}]);
angularApp.controller("mainController", [
  "$scope",
  "$location",
  "$log",
  "$filter",
  "$resource",
  "$http",
  "$timeout",
  function($scope, $location, $log, $filter, $resource, $http, $timeout) {
    $scope.name = "Ali";
    $log.log($scope);
    $log.log("logging");
    $log.info("info");
    $log.warn("warning");
    $log.debug("debug");
    $log.error("error");
    $scope.name = "Ali";
    $log.info($filter("uppercase")($scope.name));

    $scope.handle = "";

    $timeout(function() {
      $scope.name = "Alireza";
    }, 2000);

    $scope.$watch("handle", function(newValue, oldValue) {
      console.info("Changed");
      console.log("Old: ", oldValue, " New: ", newValue);
    });

    // $location.path(); //window.location.hash

    // API calls
    /*
        $http
        .get("/api")
        .success(function(result) {
            console.log(result);
        })
        .error(function(data, status) {
            console.log(data);
        });
    */
  }
]);

angularApp.controller("secondController", [
  "$scope",
  function($scope) {
    console.log($scope);
  }
]);

console.log(
  angular.injector().annotate(function($scope, fname, lname) {
    // stringifies the arguments into an array
    return "Ali";
  })
);
