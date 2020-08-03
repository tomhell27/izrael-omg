'use strict';

(function () {
  var feedbacks = document.querySelectorAll('.feedback__item');
  var hideFeedback = function () {
    feedbacks.forEach(function (e) {
      e.style.display = 'none';
    });
  };

  var number = document.querySelector('.toggle__number--left');
  var index = 0;

  var changeFeedback = function () {
    feedbacks[index].style.display = 'block';
  };

  var changeNumber = function () {
    number.textContent = (index + 1);
  };

  var left = document.querySelector('.toggle__left');
  var right = document.querySelector('.toggle__right');

  left.addEventListener('click', function () {
    index -= 1;
    if (index <= 0) {
      index = 0;
    }
    hideFeedback();
    changeFeedback();
    changeNumber();
  });

  right.addEventListener('click', function () {
    index += 1;
    if (index >= feedbacks.length) {
      index = 0;
    }
    hideFeedback();
    changeFeedback();
    changeNumber();
  });

  /*
  var toggle = document.querySelector('.toggle');
  var left = toggle.querySelector('.toggle__left');
  var right = toggle.querySelector('.toggle__right');

  var number = document.querySelector('.toggle__number--left');
  var numberAll = document.querySelector('.toggle__number--right');

  left.addEventListener('click', function () {
    if (number.textContent === 1) {
      return;
    } else {
      number.textContent -= 1;
    }
  });

  right.addEventListener('click', function () {
    if (number.textContent === feedbacks.length) {
      number.textContent = 1;
    } else {
      number.textContent += 1;
    }
  });
*/
})();
