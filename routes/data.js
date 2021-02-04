const { getHandler } = require('../handlers/index');

module.exports = [
  {
    method: 'GET',
    route: '/data',
    handler: getHandler,
  },
];