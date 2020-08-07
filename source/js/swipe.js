'use strict';

(function () {

  var slider = document.querySelector('.izrael-live');
  var sliderTrack = slider.querySelector('.slider-track');
  var slides = slider.querySelectorAll('.slide');
  var arrows = slider.querySelector('.slider-arrows');
  var prev = arrows.children[0];
  var next = arrows.children[1];
  var slideWidth = slides[0].offsetWidth;
  var slideIndex = 0;
  var posInit = 0;
  var posX1 = 0;
  var posX2 = 0;
  var posFinal = 0;
  var transform = 0;
  var posThreshold = slideWidth * 0.35;
  var trfRegExp = /[-0-9.]+(?=px)/;
  var slide = function () {
    sliderTrack.style.transition = 'transform .5s';
    sliderTrack.style.transform = 'translate3d(' + (slideIndex * slideWidth) + 'px, 0px, 0px)';

    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
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

    transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    sliderTrack.style.transform = 'translate3d(' + (transform - posX2) + 'px, 0px, 0px)';
  };

  var swipeEnd = function () {
    posFinal = posInit - posX1;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    if (Math.abs(posFinal) > posThreshold) {
      if (posInit < posX1) {
        slideIndex -= 1;

      } else if (posInit > posX1) {
        slideIndex += 1;
      }
    }

    if (posInit !== posX1) {
      slide();
    }

  };

  arrows.addEventListener('click', function () {
    var target = event.target;

    if (target === next) {
      slideIndex++;
    } else if (target === prev) {
      slideIndex--;
    } else {
      return;
    }

    slide();
  });

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';

  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);


})();
