'use strict';

angular.module('qardsApp', ['qardsApp.controllers']);

// Controllers
angular.module('qardsApp.controllers', [])
  .controller('AppController', ['$scope', function($scope) {
    $scope.quizzesData = '[{"id":1,"name":"quiz1","qards":[{"id":1,"correctAnswer":2,"question":{"id":1,"text":"question1a"},"answers":[{"id":1,"text":"answer1a"},{"id":2,"text":"answer2a"}]},{"id":2,"correctAnswer":3,"question":{"id":2,"text":"question2a"},"answers":[{"id":3,"text":"answer1b"},{"id":4,"text":"answer2b"}]}]},{"id":2,"name":"quiz2","qards":[{"id":3,"correctAnswer":6,"question":{"id":1,"text":"question1b"},"answers":[{"id":5,"text":"answer1c"},{"id":6,"text":"answer2c"}]},{"id":4,"correctAnswer":7,"question":{"id":2,"text":"question2b"},"answers":[{"id":7,"text":"answer1d"},{"id":8,"text":"answer2d"}]}]}]';

    $scope.$on('quizzesLoaded', function(e, quizzes) {
      $scope.quizzes = quizzes;
    });

    $scope.selectAnswer = function(qard, answer) {
      qard.selectedAnswer = answer.id;
      for (var i in qard.answers) {
        qard.answers[i].selectedClass = '';
      }
      answer.selectedClass = 'ui-bar-e';
    };

    $scope.isCorrect = function(qard) {
      return qard.selectedAnswer == qard.correctAnswer;
    };

    $scope.parse = function(data) {
      try {
        return JSON.parse(data);
      } catch (err) {
        console.log(err);
        return undefined;
      }
    };
  }])
