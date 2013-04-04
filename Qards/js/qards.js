'use strict';

angular.module('qardsApp', ['qardsApp.controllers']);

// Controllers
angular.module('qardsApp.controllers', [])
  .controller('AppController', ['$scope', function($scope) {
    $scope.quizzesData = '[{"name":"quiz1","qards":[{"question":{"id":1,"text":"question1a"},"answers":[{"id":1,"text":"answer1a"},{"id":2,"text":"answer2a"}]},{"question":{"id":2,"text":"question2a"},"answers":[{"id":1,"text":"answer1b"},{"id":2,"text":"answer2b"}]}]},{"name":"quiz2","qards":[{"question":{"id":1,"text":"question1b"},"answers":[{"id":1,"text":"answer1c"},{"id":2,"text":"answer2c"}]},{"question":{"id":2,"text":"question2b"},"answers":[{"id":1,"text":"answer1d"},{"id":2,"text":"answer2d"}]}]}]';

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
