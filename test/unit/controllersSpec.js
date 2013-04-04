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

  it('should parse valid JSON', function() {
    var result = scope.parse('{"a":1}');
    expect(result).toEqual({a:1});
  });

  it('should return undefined if invalid JSON', function() {
    var result = scope.parse('invalid');
    expect(result).toBeUndefined();
  });
});
