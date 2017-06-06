/*globals angular , window, unused, _  */
angular.module('app.controllers').controller('homeCtl', ['$scope', function ($scope) {
  'use strict';
  console.log('angular is up');
  $scope.init = function () {
    $scope.ng = 'angular is up';
  };
}]);
