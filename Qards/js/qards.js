'use strict';

angular.module('qardsApp', ['qardsApp.controllers']);

angular.module('qardsApp.controllers', [])
  .controller('AppController', ['$scope', function($scope) {
    $scope.$on('quizzesLoaded', function(e, quizzes) {
      $scope.quizzes = quizzes;
    });

    $scope.parse = function(data) {
      console.log(data);
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
