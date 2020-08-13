'use strict';

(function () {
  var phone = window.mask.form.querySelector('[name=phone]');
  var callName = window.mask.callForm.querySelector('[name=name]');
  var callPhone = window.mask.callForm.querySelector('[name=phone]');
  var isStorageSupport = true;
  var storage = {};
  try {
    storage.name = localStorage.getItem('name');
    storage.phone = localStorage.getItem('phone');
  } catch (err) {
    isStorageSupport = false;
  }
  window.mask.form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!phone.value) {
      phone.classList.add('input-style__error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('phone', phone.value);
        phone.classList.add('input-style__correct');
      }
    }
  });
  window.mask.callForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (!callName.value || !callPhone.value) {
      callPhone.classList.add('input-style__error');
      callName.classList.add('input-style__error');
    } else {
      if (isStorageSupport) {
        localStorage.setItem('name', callName.value);
        localStorage.setItem('phone', callPhone.value);
        callPhone.classList.add('input-style__correct');
        callName.classList.add('input-style__correct');
      }
    }
  });
})();
