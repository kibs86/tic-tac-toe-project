'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
   event.preventDefault();
   let data = getFormFields(this);
   event.preventDefault();
   debugger;
   api.signUp(data)
     .then(ui.success)
     .catch(ui.failure);
  };

// test code
// event.preventDefault();
// $('.modal-success').text("SUCCESS!");
// let coolBro = $('#sign-up-email').val();
// console.log(coolBro);
// setTimeout(function() {
//   $('#sign-up-modal').modal('hide'); }, 3000);
// $('#sign-up-modal').on('hidden.bs.modal', function () {
//   $(this).find("input,textarea,select").val('').end();
//   $('.modal-success').text('');

const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
};

module.exports = {
  addHandlers,
};

/*
$('.sign-up-form').on('submit', function(e){
  e.preventDefault();
  let coolBro = $('#sign-up-email').val();
  console.log(coolBro);

  $('#sign-up-modal').modal('hide');
});
  */
