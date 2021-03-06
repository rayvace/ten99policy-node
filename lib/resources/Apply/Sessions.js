'use strict';

const Ten99PolicyResource = require('../../Ten99PolicyResource');

module.exports = Ten99PolicyResource.extend({
  path: 'apply/sessions',

  includeBasic: ['list', 'retrieve', 'create'],
});
