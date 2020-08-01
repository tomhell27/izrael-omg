'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var wantGo = document.querySelector('.want-to-go');
  var form = wantGo.querySelector('.want-to-go__form');

  var phone = form.querySelector('[name=phone]');
  var callMe = document.querySelector('.call-me');
  var button = callMe.querySelector('.call-me__button');
  var ok = callMe.querySelector('.call-me__gradient');


  var onMenuEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      hideModal();
    }
  };

  var showModal = function () {
    callMe.classList.remove('close');
    document.body.classList.add('body-fix');
    callMe.classList.add('open');
    document.addEventListener('keydown', onMenuEscPress);
  };

  var hideModal = function () {
    callMe.classList.remove('open');
    callMe.classList.add('close');
    document.body.classList.remove('body-fix');
    document.removeEventListener('keydown', onMenuEscPress);
  };


  button.addEventListener('click', function () {
    hideModal();
  });

  button.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      hideModal();
    }
  });


  ok.addEventListener('click', function () {
    hideModal();
  });

  ok.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      hideModal();
    }
  });

  form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!phone.value) {
      phone.classlist.add('modal__error');
    } else {
      showModal();
    }
  });

})();
