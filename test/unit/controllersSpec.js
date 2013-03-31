'use strict';

/* jasmine specs for controllers go here */

describe('AppController', function(){
  beforeEach(module('qardsApp.controllers'));

  var scope, controller;
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope;
    controller = $controller('AppController', {
      $scope: $rootScope
    });
  }));

  it('should ....', function() {
    expect(scope.test).not.toBeUndefined();
  });
});
