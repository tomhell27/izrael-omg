'use strict';

(function () {
  var questionsList = document.querySelector('.questions');
  var questions = questionsList.querySelectorAll('.questions__head');
  var answers = questionsList.querySelectorAll('.questions__answer');

  answers.forEach(function (e) {
    e.classList.add('close');
  });

  questions.forEach(function (e) {
    e.classList.add('questions__head--passive');
  });
  function hideAll() {
    questions.forEach(function (e) {
      e.classList.toggle('questions__head--active', false);
      e.nextElementSibling.classList.toggle('close', true);
    });
  }

  questions.forEach(function (e) {
    var answer = e.parentElement.querySelector('.questions__answer');
    e.addEventListener('click', function () {
      if (!e.classList.contains('questions__head--active')) {
        hideAll();
      }
      e.classList.toggle('questions__head--active');
      answer.classList.toggle('close');

    });
  });
})();
