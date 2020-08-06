'use strict';

(function () {
  var anchorsList = document.querySelector('.programs__anchors');
  var anchors = anchorsList.querySelectorAll('.programs__anchors-item');

  anchors.forEach(function (e) {
    e.addEventListener('click', function () {
      var activeAnchor = document.querySelector('.programs__anchors-item--active');
      activeAnchor.classList.remove('programs__anchors-item--active');
      e.classList.add('programs__anchors-item--active');
    });
  });
})();
