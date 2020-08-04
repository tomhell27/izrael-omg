'use strict';

(function () {
  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';

  var header = document.querySelector('.header');
  var openButton = header.querySelector('.header__button');
  var modal = document.querySelector('.got-it');
  var form = modal.querySelector('.got-it__form');
  var closeButton = modal.querySelector('.got-it__button');


  var name = modal.querySelector('[name=name]');
  var phone = modal.querySelector('[name=phone]');

  var isStorageSupport = true;
  var storage = {};

  try {
    storage.name = localStorage.getItem('name');
    storage.phone = localStorage.getItem('phone');

  } catch (err) {
    isStorageSupport = false;
  }


  form.addEventListener('submit', function (evt) {
    if (!name.value || !phone.value) {
      evt.preventDefault();
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', name.value);
        localStorage.setItem('phone', phone.value);
      }
    }
  });


  var onMenuEscPress = function (evt) {
    if (evt.key === ESC_KEY) {
      hideModal();
    }
  };

  var showModal = function () {
    modal.classList.remove('close');
    document.body.classList.add('body-fix');
    modal.classList.add('open');
    document.addEventListener('keydown', onMenuEscPress);
    if (storage) {
      name.value = storage.name;
      phone.value = storage.phone;
    } else {
      name.focus();
    }
  };

  var hideModal = function () {
    modal.classList.remove('open');
    modal.classList.add('close');
    document.body.classList.remove('body-fix');
    document.removeEventListener('keydown', onMenuEscPress);
  };

  openButton.addEventListener('click', function () {
    showModal();
  });

  openButton.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      showModal();
    }
  });

  closeButton.addEventListener('click', function () {
    hideModal();
  });

  closeButton.addEventListener('keydown', function (evt) {
    if (evt.key === ENTER_KEY) {
      hideModal();
    }
  });

})();
