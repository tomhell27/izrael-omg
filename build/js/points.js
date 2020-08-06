'use strict';

(function () {
  var scroll = document.querySelector('.izrael-live__scroll');
  var anchors = scroll.querySelectorAll('.izrael-live__a');

  anchors.forEach(function (e) {
    e.addEventListener('click', function () {
      var activeAnchor = scroll.querySelector('.izrael-live__a--active');
      activeAnchor.classList.remove('izrael-live__a--active');
      e.classList.add('izrael-live__a--active');
    });
  });
})();
