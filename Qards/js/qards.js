'use strict';

angular.module('qardsApp', ['qardsApp.controllers']);

angular.module('qardsApp.controllers', [])
  .controller('AppController', ['$scope', function($scope) {
    $scope.$on('quizzesLoaded', function(e, quizzes) {
      $scope.quizzes = quizzes;
    });
  }])

  .controller('QuizController', ['$scope', 'quiz', function($scope, quiz) {
    $scope.name = quiz.name;
  }]);
