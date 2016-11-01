'use strict';

const success = (data) => {
  $('.modal-success').text("SUCCESS!");
  console.log(data);
  setTimeout(function() {
    $('#sign-up-modal').modal('hide'); }, 3000);
  $('#sign-up-modal').on('hidden.bs.modal', function () {
    $(this).find("input,textarea,select").val('').end();
    $('.modal-success').text('');
  });
};

const failure = (error) => {
  //$('').text("Failure");
  console.error(error);
};

module.exports = {
  success,
  failure,
};
