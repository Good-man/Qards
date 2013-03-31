'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('Qards app', function() {

  beforeEach(function() {
    browser().navigateTo('../../Qards/index.html');
  });


  it('should have the expected title', function() {
    expect(element('title').text()).toBe('Qards');
  });


  // describe('view1', function() {

  //   beforeEach(function() {
  //     browser().navigateTo('#/view1');
  //   });


  //   it('should render view1 when user navigates to /view1', function() {
  //     expect(element('[ng-view] p:first').text()).
  //       toMatch(/partial for view 1/);
  //   });

  // });


  // describe('view2', function() {

  //   beforeEach(function() {
  //     browser().navigateTo('#/view2');
  //   });


  //   it('should render view2 when user navigates to /view2', function() {
  //     expect(element('[ng-view] p:first').text()).
  //       toMatch(/partial for view 2/);
  //   });

  // });
});
