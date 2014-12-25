'use strict';
var something = {name : 'ybq'};
var menziController = angular.module('menziControllers', []);

menziController.controller('sideBarController', ['$scope', 'UPeiliao', function ($scope, UPeiliao) {
  console.log('side bar controller');
  $scope.gay = {
    "imageUrl" : "/images/bili.gif"
  };
  //$scope.uPeiliaos = UPeiliao.query();
}]);

menziController.controller('menziController', ['$scope', function ($scope) {
  console.log('I am menzi controller');
  $scope.data = {
    name : "123"
  };
  something = 'c';
}]);
