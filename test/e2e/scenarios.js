'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
var sampleQuizzes = JSON.stringify([
  {
    name: 'quiz1',
    qards: [
      {
        question: {
          id: 1,
          text: 'question1a'
        },
        answers: [
          {
            id: 1,
            text: 'answer1a'
          },
          {
            id: 2,
            text: 'answer2a'
          }
        ]
      },
      {
        question: {
          id: 2,
          text: 'question2a'
        },
        answers: [
          {
            id: 1,
            text: 'answer1b'
          },
          {
            id: 2,
            text: 'answer2b'
          }
        ]
      }
    ]
  },
  {
    name: 'quiz2',
    qards: [
      {
        question: {
          id: 1,
          text: 'question1b'
        },
        answers: [
          {
            id: 1,
            text: 'answer1c'
          },
          {
            id: 2,
            text: 'answer2c'
          }
        ]
      },
      {
        question: {
          id: 2,
          text: 'question2b'
        },
        answers: [
          {
            id: 1,
            text: 'answer1d'
          },
          {
            id: 2,
            text: 'answer2d'
          }
        ]
      }
    ]
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

    it('should list quizzes', function() {
      expect(repeater('div').count()).toEqual(2);
    });

    it('should list quizzes by "name"', function() {
      expect(element('.div-quiz').count()).toEqual(2);
      expect(element('.div-quiz:first').text()).toEqual('quiz1');
      expect(element('.div-quiz:last').text()).toEqual('quiz2');
    });
  });
});
