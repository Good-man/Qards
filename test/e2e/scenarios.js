'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
var sampleQuizzes = JSON.stringify([
  {
    id: 1,
    name: 'quiz1',
    qards: [
      {
        id: 1,
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
        id: 2,
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
    id: 2,
    name: 'quiz2',
    qards: [
      {
        id: 3,
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
        id: 4,
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
