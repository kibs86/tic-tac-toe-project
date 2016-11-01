'use strict';

const store = require('../store.js');

const hideAndClear = (modal) => {
  setTimeout(function() {
    $(modal).modal('hide'); }, 2000);
    $(modal).on('hidden.bs.modal', function () {
      $(this).find("input,textarea,select").val('').end();
      $('.modal-success').text('');
    });
};

const success = (data) => {
  $('.modal-success').text("SUCCESS!");
  console.log(data);
  hideAndClear('#sign-up-modal');
  hideAndClear('#sign-in-modal');
};

const failure = (error) => {
  //$('').text("Failure");
  console.error(error);
};

const signInSuccess = data => {
  store.user = data.user;
  $('.logged-in-as').text(data.user.email);
  success(data);
};

module.exports = {
  success,
  failure,
  signInSuccess,
};
