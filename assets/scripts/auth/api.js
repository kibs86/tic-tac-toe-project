'use strict';

const config = require('../config.js');
//const store = require('../store.js');

const signUp = (data) =>
  $.ajax({
    url: config.host + '/sign-up',
    method: 'POST',
    data,
  });

module.exports = {
  signUp,
};
