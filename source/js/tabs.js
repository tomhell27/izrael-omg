'use strict';

(function () {
  var anchorsList = document.querySelector('.programs__anchors');
  var anchors = anchorsList.querySelectorAll('.programs__anchors-item');
  var programList = document.querySelector('.programs__list');
  var programItems = programList.querySelectorAll('.programs__item');
  var closeIt = function () {
    programItems.forEach(function (e) {
      e.classList.add('close');
    });
  };
  anchors.forEach(function (e, i) {
    e.addEventListener('click', function () {
      var activeAnchor = document.querySelector('.programs__anchors-item--active');
      activeAnchor.classList.remove('programs__anchors-item--active');
      e.classList.add('programs__anchors-item--active');
      var index = i;
      closeIt();
      programItems[index].classList.remove('close');
    });
  });
})();
