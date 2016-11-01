'use strict';

const authEvents = require('./auth/events.js');

$(()=>{
  authEvents.addHandlers();
  $(".reset").click(function() {
        $("input").val("");
    });
});
