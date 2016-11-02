'use strict';

const store = require('../store.js');
const globalJS = require('../global.js');

const hideAndClear = (modal) => {
  setTimeout(function() {
    $(modal).modal('hide'); }, 2000);
    $(modal).on('hidden.bs.modal', function () {
      $(this).find("input,textarea,select").val('').end();
      $('.modal-success').text('');
    });
};

const signUpSuccess = (data) => {
  $('.modal-success').text("SUCCESS!");
  console.log(data);
  hideAndClear('#sign-up-modal');
};

const signInSuccess = data => {
  store.user = data.user;
  $('.logged-in-as').text(data.user.email);
  $('.modal-success').text("SUCCESS!");
  globalJS.globalVars.playerLogin = true;
  globalJS.globalVars.playerEmail = data.user.email;
  console.log(globalJS.globalVars.playerLogin);
  console.log(data);
  hideAndClear('#sign-in-modal');
};

const signOutSuccess = data => {
  $('.modal-success').text("SUCCESS!");
  globalJS.globalVars.playerLogin = false;
  globalJS.globalVars.playerEmail = '';
  console.log(globalJS.globalVars.playerLogin);
  console.log(data);
  $('.logged-in-as').text('');
  hideAndClear('#sign-out-modal');
};

const changePasswordSuccess = data => {
  $('.modal-success').text("SUCCESS!");
  console.log(data);
  hideAndClear('#change-password-modal');
};

const failure = (error) => {
  $('.modal-success').text("FAILURE!");
  console.error(error);
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
};
