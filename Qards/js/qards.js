'use strict';

angular.module('qardsApp', ['qardsApp.controllers']);

angular.module('qardsApp.controllers', [])
  .controller('AppController', ['$scope', function($scope) {
    $scope.quizzesData = '[{"name":"quiz1","qards":[{"question":"question1","answers":["answer1","answer2"]}]},{"name":"quiz2"}]';
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

  .controller('QuizController', ['$scope', 'quiz', function($scope, quiz) {
    $scope.name = quiz.name;
    $scope.qards = quiz.qards;
  }])

  .controller('QardController', ['$scope', 'qard', function($scope, qard) {
    $scope.question = qard.question;
  }]);
