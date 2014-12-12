var menziApp = angular.module('menziApp', []);

// menziApp.controller('menziController', function ($scope) {
//   $scope.gay = 
//     {"imageUrl": "../images/bili.gif"};

//   console.log('here2333');
// });

 menziApp.controller('menziController', ['$scope', function($scope) {
  console.log('I am controller');
  $scope.data = {
  	name : "123"
  };
 }]);

