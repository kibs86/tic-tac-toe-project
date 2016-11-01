'use strict';

const onTileClick = function () {
  console.log('you clicked a tile');
};

const addHandlers = () => {
  $('.b0').on('click', onTileClick);
};

module.exports = {
  addHandlers,
};
