'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var wantGo = document.querySelector('.want-to-go');
  var form = wantGo.querySelector('.want-to-go__form');
  var callForm = document.querySelector('.contacts__form');
  var modalForm = document.querySelector('.got-it__form');
  var callMe = document.querySelector('.call');
  var button = callMe.querySelector('.call__button');
  var ok = callMe.querySelector('.call__gradient');
  var mask = '+7 (111) 111-11-11';
  var check = mask.length;

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
  var goModal = function (el) {
    el.addEventListener('submit', function (evt) {
      evt.preventDefault();
      var phone = el.querySelector('[name=phone]');
      if (!phone.value || (phone.value.length < check)) {
        phone.classList.add('modal__error');
      } else {
        showModal();
      }
    });
  };
  goModal(form);
  goModal(callForm);
  goModal(modalForm);
})();
