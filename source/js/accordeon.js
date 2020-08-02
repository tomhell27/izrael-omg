'use strict';

(function () {
  var questionsList = document.querySelector('.questions');
  var questions = questionsList.querySelectorAll('.questions__head');

  var checkClass = function () {
    questions.forEach(function (e) {
      if (e.classList.contains('questions__head--active')) {
        e.classList.remove('questions__head--active');
        var answer = e.parentElement.querySelector('.questions__answer');
        answer.classList.add('close');
      }
    });
  };

  questions.forEach(function (e) {

    e.addEventListener('click', function () {
      checkClass();
      e.classList.toggle('questions__head--active');
      var answer = e.parentElement.querySelector('.questions__answer');
      answer.classList.toggle('close');
    });
  });
})();
