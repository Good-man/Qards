'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
var sampleQuizzes = JSON.stringify([
  {
    name: 'quiz1',
    qards: [
      {
        question: 'question1',
        answers: [
          'answer1',
          'answer2'
        ]
      }
    ]
  },
  {
    name: 'quiz2'
  }
]);


describe('Qards app', function() {

  beforeEach(function() {
    browser().navigateTo('../../Qards/index.html');
  });

  it('should have the expected title', function() {
    expect(element('title').text()).toBe('Qards');
  });

  describe('AppController', function() {
    beforeEach(function() {
      input('quizzesData').enter(sampleQuizzes);
      element('#btn-loadQuizzes').click();
    });

    it('should create "quizzes" model', function() {
      // console.log(binding('quizzes'));
      // expect(binding('quizzes')).toBe([]);
    });

    it('should list quizzes', function() {
      expect(repeater('ul li').count()).toEqual(2);
    });

    it('should list quizzes by "name"', function() {
      expect(repeater('ul li').column(0)).toEqual(['quiz1','quiz2']);
    });


    describe('QuizController', function() {

    });
  });
});
