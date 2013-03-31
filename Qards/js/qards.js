'use strict';

angular.module('qardsApp', ['qardsApp.controllers']);

angular.module('qardsApp.controllers', [])
  .controller('AppController', ['$scope', function($scope) {
    $scope.test = null;
  }]);
