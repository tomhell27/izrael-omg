'use strict';

(function () {
  var feedbacks = document.querySelectorAll('.feedback__item');
  feedbacks.forEach(function (e) {
    e.style.display = 'none';
  });

  var index = 0;

  feedbacks[index].style.display = 'block';

  var left = document.querySelector('.toggle__left');
  var right = document.querySelector('.toggle__right');

  left.addEventListener('click', function () {
    index -= 1;
  });

  right.addEventListener('click', function () {
    index += 1;
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
