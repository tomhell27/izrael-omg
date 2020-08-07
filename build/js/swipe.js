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

    // делаем стрелку prev недоступной на первом слайде
    // и доступной в остальных случаях
    // делаем стрелку next недоступной на последнем слайде
    // и доступной в остальных случаях
    prev.classList.toggle('disabled', slideIndex === 0);
    next.classList.toggle('disabled', slideIndex === --slides.length);
  };
  var getEvent = function () {
    return event.type.search('touch') !== -1 ? event.touches[0] : event;
    // p.s. event - аргумент по умолчанию в функции
  };


  var swipeStart = function () {
    var evt = getEvent();

    // берем начальную позицию курсора по оси Х
    posInit = posX1 = evt.clientX;

    // убираем плавный переход, чтобы track двигался за курсором без задержки
    // т.к. он будет включается в функции slide()
    sliderTrack.style.transition = '';

    // и сразу начинаем отслеживать другие события на документе
    document.addEventListener('touchmove', swipeAction);
    document.addEventListener('touchend', swipeEnd);
    document.addEventListener('mousemove', swipeAction);
    document.addEventListener('mouseup', swipeEnd);
  };
  var swipeAction = function () {
    var evt = getEvent();
    // для более красивой записи возьмем в переменную текущее свойство transform
    var style = sliderTrack.style.transform;
    // считываем трансформацию с помощью регулярного выражения и сразу превращаем в число
    transform = +style.match(trfRegExp)[0];

    posX2 = posX1 - evt.clientX;
    posX1 = evt.clientX;

    sliderTrack.style.transform = 'translate3d(' + (transform - posX2) + 'px, 0px, 0px)';
    // можно было бы использовать метод строк .replace():
    // sliderTrack.style.transform = style.replace(trfRegExp, match => match - posX2);
    // но в дальнейшем нам нужна будет текущая трансформация в переменной
  };

  var swipeEnd = function () {
    // финальная позиция курсора
    posFinal = posInit - posX1;

    document.removeEventListener('touchmove', swipeAction);
    document.removeEventListener('mousemove', swipeAction);
    document.removeEventListener('touchend', swipeEnd);
    document.removeEventListener('mouseup', swipeEnd);

    // убираем знак минус и сравниваем с порогом сдвига слайда
    if (Math.abs(posFinal) > posThreshold) {
      // если мы тянули вправо, то уменьшаем номер текущего слайда
      if (posInit < posX1) {
        slideIndex -= 1;
        // если мы тянули влево, то увеличиваем номер текущего слайда
      } else if (posInit > posX1) {
        slideIndex += 1;
      }
    }

    // если курсор двигался, то запускаем функцию переключения слайдов
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
