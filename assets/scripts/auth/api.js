'use strict';

const config = require('../config.js');
//const store = require('../store.js');

const signUp = (data) =>
  $.ajax({
    url: config.host + '/sign-up',
    method: 'POST',
    data,
  });

const signIn = (data) =>
  $.ajax({
    url: config.host + '/sign-in',
    method: 'POST',
    data,
  });

module.exports = {
  signUp,
  signIn,
};
