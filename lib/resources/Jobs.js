'use strict';

const Ten99PolicyResource = require('../Ten99PolicyResource');

module.exports = Ten99PolicyResource.extend({
  path: 'jobs',

  includeBasic: ['list', 'retrieve', 'create', 'update', 'del'],
});
