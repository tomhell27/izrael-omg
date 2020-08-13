'use strict';

(function () {
  var scroll = document.querySelector('.izrael-live__scroll');
  var anchors = scroll.querySelectorAll('.izrael-live__a');

  /*
  anchors.forEach(function (e) {
      var result = newTransform % 300;
      if (result === 0) {
        var newIndex = newTransform / 300;
        e[newIndex].classList.add('.izrael-live__a--active');
      }

       var getActive = function (number) {
      anchors.forEach(function (e) {
        var activeAnchor = document.querySelector('.izrael-live__a--active');
        activeAnchor.classList.remove('izrael-live__a--active');
        e[number].classList.add('izrael-live__a--active');

      });
    };
    });*/


  anchors.forEach(function (e) {
    e.addEventListener('click', function () {
      var activeAnchor = scroll.querySelector('.izrael-live__a--active');
      activeAnchor.classList.remove('izrael-live__a--active');
      e.classList.add('izrael-live__a--active');
    });
  });
})();
