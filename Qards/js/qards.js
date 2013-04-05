'use strict';

angular.module('qardsApp', ['ui.bootstrap', 'qardsApp.controllers']);

// Controllers
angular.module('qardsApp.controllers', [])
  .controller('AppController', ['$scope', function($scope) {
    $scope.quizzesData = '[{"id":1,"name":"quiz1","qards":[{"id":1,"question":{"id":1,"text":"question1a"},"answers":[{"id":1,"text":"answer1a"},{"id":2,"text":"answer2a"}]},{"id":2,"question":{"id":2,"text":"question2a"},"answers":[{"id":3,"text":"answer1b"},{"id":4,"text":"answer2b"}]}]},{"id":2,"name":"quiz2","qards":[{"id":3,"question":{"id":1,"text":"question1b"},"answers":[{"id":5,"text":"answer1c"},{"id":6,"text":"answer2c"}]},{"id":4,"question":{"id":2,"text":"question2b"},"answers":[{"id":7,"text":"answer1d"},{"id":8,"text":"answer2d"}]}]}]';

    $scope.$on('quizzesLoaded', function(e, quizzes) {
      $scope.quizzes = quizzes;
    });

    $scope.parse = function(data) {
      try {
        return JSON.parse(data);
      } catch (err) {
        console.log(err);
        return undefined;
      }
    };
  }])
