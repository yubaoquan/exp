var menziServices = angular.module('menziServices', ['ngResource']);

menziServices.factory('UPeiliao', ['$resource',
  function($resource){
    console.log('resource');
    return $resource('/data/a.json', {}, {
      query: {method:'GET', isArray:true}
    });
  }]);