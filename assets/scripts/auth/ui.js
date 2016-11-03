'use strict';

const store = require('../store.js');
const globalJS = require('../global.js');

// Hides and clears the login/sign up modals after a certain period of time
// Called from below functions
const hideAndClear = (modal) => {
  setTimeout(function() {
    $(modal).modal('hide'); }, 1000);
    $(modal).on('hidden.bs.modal', function () {
      $(this).find("input,textarea,select").val('').end();
      $('.modal-success').text('');
    });
};

// If sign up is successful, let the user know
const signUpSuccess = () => {
  $('.modal-success').text("SUCCESS!");
  hideAndClear('#sign-up-modal');
};

// If sign in is successful, store their data and let the user know
const signInSuccess = (data) => {
  store.user = data.user;
  $('.logged-in-as').text(data.user.email);
  $('.modal-success').text("SUCCESS!");
  globalJS.globalVars.playerLogin = true;
  globalJS.globalVars.playerEmail = data.user.email;
  hideAndClear('#sign-in-modal');
};

// If sign out is successful, let user know
const signOutSuccess = () => {
  $('.modal-success').text("SUCCESS!");
  globalJS.globalVars.playerLogin = false;
  globalJS.globalVars.playerEmail = '';
  $('.logged-in-as').text('');
  hideAndClear('#sign-out-modal');
};

// If user successfully changes their password, let user know
const changePasswordSuccess = () => {
  $('.modal-success').text("SUCCESS!");
  hideAndClear('#change-password-modal');
};

// If any login functionality fails, let user know
const failure = () => {
  $('.modal-success').text("That function failed.");
};


module.exports = {
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  failure,
};
