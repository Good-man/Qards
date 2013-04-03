'use strict';


describe('AppController', function() {
  beforeEach(module('qardsApp.controllers'));

  var scope, controller;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope;
    controller = $controller('AppController', {
      $scope: $rootScope
    });
  }));

  it('on quizzesLoaded should create "quizzes" model', function() {
    scope.$broadcast('quizzesLoaded', []);
    expect(scope.quizzes).toEqual([]);
  });
});

describe('QuizController', function() {
  beforeEach(module('qardsApp.controllers'));

  var scope, controller;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope;
    controller = $controller('QuizController', {
      $scope: $rootScope,
      quiz: {
        name: 'name',
        qards: []
      }
    });
  }));

  it('should create a "name" model', function() {
    expect(scope.name).toBe('name');
  });

  it('should create a "qards" model', function() {
    expect(scope.qards).toEqual([]);
  });
});

describe('QardController', function() {
  beforeEach(module('qardsApp.controllers'));

  var scope, controller;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope;
    controller = $controller('QardController', {
      $scope: $rootScope,
      qard: {
        question: 'question'
      }
    });
  }));

  it('should create a "question" model', function() {
      expect(scope.question).toBe('question');
    });
});
