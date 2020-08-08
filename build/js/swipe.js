'use strict';

(function () {
  var slider = document.querySelector('.izrael-live');
  var sliderTrack = slider.querySelector('.slider-track');
  var slideWidth = 300;
  var slideIndex = 0;
  var posInit = 0;
  var posX1 = 0;
  var posX2 = 0;
  var posFinal = 0;
  var posThreshold = slideWidth * 0.35;
  var trfRegExp = /[-0-9.]+(?=px)/;
  var slide = function () {
    sliderTrack.style.transition = 'transform 0.5s';
    var newInd = slideIndex * slideWidth;

    sliderTrack.style.transform = 'translate3d(' + (newInd) + 'px, 0px, 0px)';
  };
  var getEvent = function () {
    return event.type.search('touch') !== -1 ? event.touches[0] : event;
  };


  var swipeStart = function () {
    var evt = getEvent();
    posInit = posX1 = evt.clientX;
    sliderTrack.style.transition = '';
    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
  };

  var swipeAction = function () {
    var evt = getEvent();

    var style = sliderTrack.style.transform;

    var transform = style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    var newTransform = transform - posX2;
    if (newTransform > 0 || newTransform <= -1200) {
      sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
      return;
    } else {
      posX1 = evt.clientX;

      sliderTrack.style.transform = 'translate3d(' + newTransform + 'px, 0px, 0px)';
    }

  };

  var swipeEnd = function () {
    posFinal = posInit - posX1;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    if (Math.abs(posFinal) > posThreshold) {
      if (posInit < posX1) {
        slideIndex += 1;

      } else if (posInit > posX1) {
        slideIndex -= 1;
      }
    }

    if (posInit !== posX1) {
      slide();
    }

  };

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);


})();
