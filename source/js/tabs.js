'use strict';

(function () {
  var anchorsUl = document.querySelector('.programs__anchors');
  var anchors = anchorsUl.querySelectorAll('.programs__anchors-item');

  var onLinkActive = function (a) {
    var link = a.querySelector('.programs__link');
    var beforeLink = a.querySelector('.programs__link::before');

    link.classlist.toggle('.programs__link:active');
    beforeLink.classlist.toggle('.programs__link:active::before');
  };

  anchors.forEach(function (e) {
    e.addEventListener('click', onLinkActive(e));
  });

})();
